import datetime
import json

from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, permissions, response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from django.utils import timezone

from health.models import Blank, MedicalRecord, Examination, Prescription, Medication, Dose
from users.models import Hospital
from users.models import EventCard, DoctorProfile, Notification, PatientProfile, Appointment, Specialization, Feedback
from users.serializers import UserSerializer, DoctorProfileSerializer, PatientProfileSerializer, EventCardSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def retrieve(self, request, pk=None, *args, **kwargs):
        if pk == 'i':
            serialised_user = UserSerializer(request.user, context={'request': request})
            return response.Response(serialised_user.data)
        return super(UserViewSet, self).retrieve(request, pk)


@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        user_serializer = UserSerializer(data=request.POST)
        if user_serializer.is_valid():
            user_serializer.create(user_serializer.data)
            return JsonResponse(user_serializer.data, status=201)
        return JsonResponse(user_serializer.errors, status=400)


@csrf_exempt
def update_user_profile(request):
    if request.method == 'POST':
        user_profile_serializer = None
        group = request.POST.get('group')
        if group == 'doctor':
            user_profile_serializer = DoctorProfileSerializer(data=request.POST)
        elif group == 'patient':
            user_profile_serializer = PatientProfileSerializer(data=request.POST)
        if user_profile_serializer.is_valid():
            user_profile_serializer.create(user_profile_serializer.data)
            return JsonResponse(user_profile_serializer.data, status=201)
        return JsonResponse(user_profile_serializer.errors, status=400)


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        group = user.groups.first()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'id': user.id,
            'user_group': group.name,
            'token': token.key
        })


custom_auth_token = CustomAuthToken.as_view()


@csrf_exempt
def create_event_card(request):
    if request.method == 'POST':
        event_card_serializer = EventCardSerializer(data=request.POST)
        if event_card_serializer.is_valid():
            event_card_serializer.create(event_card_serializer.data)
            return JsonResponse(event_card_serializer.data, status=201)
        return JsonResponse(event_card_serializer.errors, status=400)


@csrf_exempt
def get_event_cards(request):
    if request.method == 'GET':
        user_id = request.GET.get('user_id')
        event_cards = EventCard.objects.filter(user_id=user_id)

        event_cards_list = list()
        for event_card in event_cards:
            event_cards_list.append(event_card.title)

        return JsonResponse(event_cards_list, status=200, safe=False)


@csrf_exempt
def get_doctors(request):
    if request.method == 'GET':
        doctors = DoctorProfile.objects.all()

        doctors_list = list()
        for doctor in doctors:
            specialization = doctor.specialization.name
            hospital = doctor.hospitals.all()[0].name
            doctors_list.append({
                'firstname': doctor.firstname,
                'lastname': doctor.lastname,
                'middlename': doctor.middlename,
                'bio': doctor.bio,
                'user_id': doctor.user.id,
                'age': doctor.age,
                'phone_number': doctor.phone_number,
                'experience': doctor.experience,
                'specialization': specialization,
                'hospital': hospital,
                'feedbacks': doctor.feedback_set.all().count()
            })

        return JsonResponse(doctors_list, status=200, safe=False)


@csrf_exempt
def get_profile_data(request):
    if request.method == 'GET':
        user_id = request.GET.get('userId')
        user_group = request.GET.get('userGroup')
        hospitals_list = list()
        education_list = list()
        profile_dict = dict()
        if user_group == 'doctor':
            profile = DoctorProfile.objects.get(user_id=user_id)

            hospitals = profile.hospitals.all()

            for hospital in hospitals:
                hospitals_list.append({
                    "value": hospital.id,
                    "label": hospital.name
                })

            education = profile.education_set.all()
            for entry in education:
                education_list.append({
                    "id": entry.id,
                    "entity": entry.name,
                    "dateFrom": entry.date_from,
                    "dateTo": entry.date_to,
                    "address": entry.address
                })
            if len(education_list) == 0:
                education_list.append({"id": 0})
            profile_dict = return_doctor_data(profile, hospitals_list, education_list)
        if user_group == 'patient':
            profile = PatientProfile.objects.get(user_id=user_id)
            profile_dict = return_patient_data(profile)

        return JsonResponse(profile_dict, status=200)


def return_doctor_data(doctor, hospitals, education):
    stats = calculate_stats(doctor)
    return {
            'username': doctor.user.username,
            'email': doctor.user.email,
            'firstname': doctor.firstname,
            'lastname': doctor.lastname,
            'middlename': doctor.middlename,
            'bio': doctor.bio,
            'user_id': doctor.user.id,
            'age': doctor.age,
            'gender': doctor.gender,
            'phoneNumber': doctor.phone_number,
            'experience': doctor.experience,
            'specializationId': doctor.specialization.id if doctor.specialization else None,
            'specializationName': doctor.specialization.name if doctor.specialization else None,
            'hospitals': hospitals,
            'education': education,
            'recommendations': stats[0] if len(stats) > 1 else 0,
            'patients': stats[1] if len(stats) > 1 else 0
    }


def calculate_stats(doctor):
    recommendations = Feedback.objects.filter(doctor_profile=doctor, recommendation=True).count()
    appointments = Appointment.objects.filter(doctor=doctor, status='completed').count()
    return [recommendations, appointments]


def return_patient_data(patient):
    return {
            'username': patient.user.username,
            'email': patient.user.email,
            'firstname': patient.firstname,
            'lastname': patient.lastname,
            'middlename': patient.middlename,
            'address': patient.address,
            'age': patient.age,
            'gender': patient.gender,
            'phoneNumber': patient.phone_number,
    }


@csrf_exempt
def create_notification(request):
    if request.method == 'POST':
        patient_id = request.POST.get('patient_id')
        doctor_id = request.POST.get('doctor_id')
        complaints = request.POST.get('complaints')
        date = request.POST.get('date')
        hospital_id = request.POST.get('hospital_id')
        repeat_visit = request.POST.get('repeat_visit')

        doctor_profile = DoctorProfile.objects.get(user_id=doctor_id)
        patient_profile = PatientProfile.objects.get(user_id=patient_id)
        hospital = Hospital.objects.get(pk=hospital_id)

        notification = Notification(complaints=complaints, date=date)
        notification.patient_profile = patient_profile
        notification.doctor_profile = doctor_profile
        notification.hospital = hospital

        if repeat_visit == 'true':
            notification.visit_number = 2
        notification.save()

    return JsonResponse({"message": "OK"}, static=201)


@csrf_exempt
def approve_notification(request):
    notification_id = None
    if request.method == 'GET':
        notification_id = request.GET.get('notification_id')
        notification = Notification.objects.get(pk=notification_id)

        if notification.status != 'approved':
            if notification.visit_number == '2':
                create_reappointment(notification)
            else:
                appointment = create_appointment(notification)
                create_blank(notification, appointment)

            notification.status = 'approved'
            notification.save()

    return JsonResponse(notification_id, status=201, safe=False)


@csrf_exempt
def decline_notification(request):
    notification_id = None
    if request.method == 'GET':
        notification_id = request.GET.get('notification_id')
        notification = Notification.objects.get(pk=notification_id)

        notification.status = 'declined'
        notification.save()

    return JsonResponse(notification_id, status=201, safe=False)


def create_reappointment(notification):
    doctor_profile = notification.doctor_profile
    patient_profile = notification.patient_profile
    status = 'extra_exam'
    date_from = notification.date
    date_to = date_from + datetime.timedelta(hours=1)
    try:
        previous_appointment = Appointment.objects.get(doctor=doctor_profile, patient=patient_profile, status=status)
        previous_appointment.status = 'completed'
        previous_appointment.save()
        old_blank = previous_appointment.blank
        next_appointment = Appointment.objects.create(doctor=doctor_profile,
                                                      patient=patient_profile,
                                                      status='pending',
                                                      visit_number=2,
                                                      date_from=date_from,
                                                      date_to=date_to,
                                                      hospital=notification.hospital)

        new_blank = Blank.objects.create(complaints=old_blank.complaints,
                                         prov_diagnosis=old_blank.prov_diagnosis,
                                         appointment=next_appointment)
        for exam in old_blank.examination_set.all():
            new_blank.examination_set.add(exam)
        next_appointment.blank = new_blank
        next_appointment.blank.save()
        next_appointment.save()
    except Appointment.DoesNotExist:
        next_appointment = None
    return next_appointment


def create_appointment(notification):
    patient_profile = notification.patient_profile
    doctor_profile = notification.doctor_profile
    date_from = notification.date
    date_to = date_from + datetime.timedelta(hours=1)
    appointment = Appointment.objects.create(patient=patient_profile,
                                             doctor=doctor_profile,
                                             date_from=date_from,
                                             date_to=date_to,
                                             hospital=notification.hospital)

    return appointment


def create_blank(notification, appointment):
    Blank.objects.create(complaints=notification.complaints,
                         appointment=appointment)


@csrf_exempt
def get_notifications(request):
    notifications_list = list()

    if request.method == 'GET':
        user_id = request.GET.get('user_id')
        user_group = request.GET.get('user_group')

        if user_group == 'doctor':
            doctor_profile = DoctorProfile.objects.get(user_id=user_id)
            notifications = Notification.objects.filter(doctor_profile=doctor_profile, status='pending')

            for notification in notifications:
                patient_profile = {
                    "id": notification.patient_profile.id,
                    "firstname": notification.patient_profile.firstname,
                    "lastname": notification.patient_profile.lastname
                }

                notifications_list.append({
                    "id": notification.id,
                    "profile": patient_profile,
                    "complaints": notification.complaints,
                    "hospital": notification.hospital.name,
                    "date": notification.date,
                    "status": notification.status,
                    "visitNumber": notification.visit_number
                })

        if user_group == 'patient':
            patient_profile = PatientProfile.objects.get(user_id=user_id)
            notifications = Notification.objects.filter(patient_profile=patient_profile)

            for notification in notifications:
                doctor_profile = {
                    "id": notification.doctor_profile.id,
                    "firstname": notification.doctor_profile.firstname,
                    "lastname": notification.doctor_profile.lastname
                }

                notifications_list.append({
                    "id": notification.id,
                    "profile": doctor_profile,
                    "hospital": notification.hospital.name,
                    "date": notification.date,
                    "status": notification.status
                })

    return JsonResponse(notifications_list, status=200, safe=False)


@csrf_exempt
def get_appointments(request):
    appointments_list = list()
    if request.method == 'GET':
        user_id = request.GET.get('user_id')
        user_group = request.GET.get('user_group')
        appointments = []
        if user_group == 'doctor':
            try:
                doctor = DoctorProfile.objects.get(user_id=user_id)
                appointments = Appointment.objects.filter(doctor=doctor)
            except DoctorProfile.DoesNotExist:
                pass
        if user_group == 'patient':
            try:
                patient = PatientProfile.objects.get(user_id=user_id)
                appointments = Appointment.objects.filter(patient=patient)
            except PatientProfile.DoesNotExist:
                pass

        for appointment in appointments:
            appointments_list.append({
                "id": appointment.id,
                "title": appointment.patient.lastname,
                "dateFrom": appointment.date_from,
                "dateTo": appointment.date_to
            })
    return JsonResponse(appointments_list, status=200, safe=False)


@csrf_exempt
def get_current_appointment(request):
    current_appointment = dict()
    blank = dict()
    if request.method == 'GET':
        doctor_id = request.GET.get('doctor_id')
        doctor_profile = DoctorProfile.objects.get(user_id=doctor_id)
        now = timezone.now()
        appointments = Appointment.objects.filter(doctor=doctor_profile)

        for appointment in appointments:
            if appointment.date_from <= now <= appointment.date_to:
                current_appointment["id"] = appointment.id
                current_appointment["fullname"] = '%s %s' % (appointment.patient.lastname, appointment.patient.firstname)
                current_appointment["gender"] = appointment.patient.gender
                current_appointment["age"] = appointment.patient.age
                current_appointment["address"] = appointment.patient.address
                current_appointment["visitNumber"] = appointment.visit_number
                current_appointment["status"] = appointment.status
                blank["id"] = appointment.blank.id
                blank["complaints"] = appointment.blank.complaints
                blank["provDiagnosis"] = appointment.blank.prov_diagnosis

                examinations_list = []
                for examination in appointment.blank.examination_set.all():
                    examinations_list.append({
                        "id": examination.id,
                        "content": examination.content,
                        "results": examination.results
                    })
                blank["analyses"] = examinations_list
                blank["prescription"] = []
                current_appointment["blank"] = blank

    return JsonResponse(current_appointment, status=200, safe=False)


@csrf_exempt
def save_blank(request):
    if request.method == 'POST':
        blank_id = request.POST.get('blankId')
        appointment_id = request.POST.get('appointmentId')
        prov_diagnosis = request.POST.get('provDiagnosis')
        examinations = request.POST.getlist('examinations[]')

        appointment = Appointment.objects.get(pk=appointment_id)
        doctor_fullname = '%s %s %s' % (appointment.doctor.lastname, appointment.doctor.firstname, appointment.doctor.middlename)
        for examination in examinations:
            native_object = json.loads(examination)
            key = list(native_object.keys())[0]
            Examination.objects.create(content=native_object[key], blank_id=blank_id)

        blank = Blank.objects.get(pk=blank_id)
        blank.prov_diagnosis = prov_diagnosis
        blank.save()
        appointment.status = 'extra_exam'
        appointment.save()
        MedicalRecord.objects.create(doctor_fullname=doctor_fullname,
                                     date=appointment.date_from,
                                     hospital_name=appointment.hospital.name,
                                     blank=blank)
        return JsonResponse({"message": "OK"}, status=201)


@csrf_exempt
def complete_appointment(request):
    if request.method == 'POST':
        blank_id = request.POST.get('blankId')
        appointment_id = request.POST.get('appointmentId')
        final_diagnosis = request.POST.get('finalDiagnosis')
        examinations = request.POST.getlist('examinations[]')
        prescription = request.POST.getlist('prescription[]')

        appointment = Appointment.objects.get(pk=appointment_id)
        doctor_fullname = '%s %s %s' % (appointment.doctor.lastname, appointment.doctor.firstname, appointment.doctor.middlename)

        for examination in examinations:
            native_object = json.loads(examination)
            exam_id = native_object["id"]
            examination = Examination.objects.get(pk=exam_id, blank_id=blank_id)
            examination.results = native_object["results"]
            examination.save()

        for item in prescription:
            native_object = json.loads(item)
            medication = Medication.objects.create(name=native_object["medicine"])
            dose = Dose.objects.create(dosage=native_object["dosage"],
                                       timing=native_object["timing"],
                                       limit=native_object["limit"])
            Prescription.objects.create(blank_id=blank_id,
                                        medication=medication,
                                        dose=dose,
                                        duration=native_object["duration"],
                                        comment=native_object["comments"])

        blank = Blank.objects.get(pk=blank_id)
        blank.final_diagnosis = final_diagnosis
        blank.save()
        appointment.status = 'completed'
        appointment.save()
        MedicalRecord.objects.create(doctor_fullname=doctor_fullname,
                                     date=appointment.date_from,
                                     hospital_name=appointment.hospital.name,
                                     blank=blank)
        return JsonResponse({"message": "OK"}, status=201)


@csrf_exempt
def get_specializations(request):
    specializations_list = list()
    if request.method == 'GET':
        specializations = Specialization.objects.all()
        for specialization in specializations:
            specializations_list.append({
                "id": specialization.id,
                "name": specialization.name,
            })
    return JsonResponse(specializations_list, status=200, safe=False)


@csrf_exempt
def get_hospitals(request):
    hospitals_list = list()
    if request.method == 'GET':
        hospitals = Hospital.objects.all()
        for hospital in hospitals:
            hospitals_list.append({
                "value": hospital.id,
                "label": hospital.name,
            })
    return JsonResponse(hospitals_list, status=200, safe=False)


@csrf_exempt
def submit_feedback(request):
    if request.method == 'POST':
        content = request.POST.get('content')
        attentiveness = request.POST.get('attentiveness')
        qualification = request.POST.get('qualification')
        quality_to_price = request.POST.get('qualityToPrice')
        recommendation = request.POST.get('recommendation')
        doctor_id = request.POST.get('doctorId')
        user_id = request.POST.get('userId')

        if recommendation == 'yes':
            recommendation = True
        else:
            recommendation = False
        try:
            doctor_profile = DoctorProfile.objects.get(user_id=doctor_id)
            patient_profile = PatientProfile.objects.get(user_id=user_id)
            appointments = Appointment.objects.filter(doctor=doctor_profile, patient=patient_profile, status='completed')
            if appointments:
                Feedback.objects.create(content=content,
                                        attentiveness=attentiveness,
                                        qualification=qualification,
                                        quality_to_price=quality_to_price,
                                        recommendation=recommendation,
                                        doctor_profile=doctor_profile,
                                        patient_profile=patient_profile)
        except Appointment.DoesNotExist:
            raise PermissionDenied

    return JsonResponse('', status=200, safe=False)


@csrf_exempt
def get_permission_for_feedback(request):
    if request.method == 'GET':
        user_id = request.GET.get('userId')
        doctor_id = request.GET.get('doctorId')
        doctor = DoctorProfile.objects.get(user_id=doctor_id)
        allowed = False
        try:
            patient = PatientProfile.objects.get(user_id=user_id)
            appointments = Appointment.objects.filter(doctor=doctor, patient=patient, status='completed')
            if appointments:
                allowed = True
        except PatientProfile.DoesNotExist:
            allowed = False

        return JsonResponse(allowed, status=200, safe=False)


@csrf_exempt
def get_medical_records(request):
    if request.method == 'GET':
        user_id = request.GET.get('user_id')
        patient_profile = PatientProfile.objects.get(user_id=user_id)
        appointments = Appointment.objects.filter(patient=patient_profile)
        medical_records = []
        for appointment in appointments:
            blank = appointment.blank
            doctor_fullname = blank.medicalrecord.doctor_fullname
            date = appointment.date_from
            examinations = blank.examination_set.all()
            prescription = blank.prescription_set.all()
            medical_records.append({
                "id": blank.medicalrecord.id,
                "doctorId": appointment.doctor.user.id,
                "doctorFullname": doctor_fullname,
                "provDiagnosis": blank.prov_diagnosis,
                "finalDiagnosis": blank.final_diagnosis,
                "date": date,
                "complaints": blank.complaints,
                "examinations": [{"id": exam.id,
                                  "content": exam.content,
                                  "results": exam.results} for exam in examinations],
                "prescription": [{"id": item.id,
                                  "medicine": item.medication.name,
                                  "dosage": item.dose.dosage,
                                  "timing": item.dose.timing,
                                  "limit": item.dose.limit,
                                  "duration": item.duration,
                                  "comments": item.comment} for item in prescription],
                "hospital": appointment.hospital.name
            })

        return JsonResponse(medical_records, safe=False)


@csrf_exempt
def get_feedbacks(request):
    feedbacks_list = list()
    if request.method == 'GET':
        user_id = request.GET.get('user_id')
        try:
            doctor_profile = DoctorProfile.objects.get(user_id=user_id)
            feedbacks = Feedback.objects.filter(doctor_profile=doctor_profile)
            for feedback in feedbacks:
                fullname = "%s %s %s" % (feedback.patient_profile.lastname, feedback.patient_profile.firstname, feedback.patient_profile.middlename)
                feedbacks_list.append({
                    "id": feedback.id,
                    "content": feedback.content,
                    "attentiveness": feedback.attentiveness,
                    "qualification": feedback.qualification,
                    "qualityToPrice": feedback.quality_to_price,
                    "recommendation": feedback.recommendation,
                    "patient_fullname": fullname
                })
        except (Feedback.DoesNotExist, DoctorProfile.DoesNotExist):
            pass

    return JsonResponse(feedbacks_list, status=200, safe=False)