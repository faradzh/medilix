import json
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from django.contrib.auth.models import User, Group
from health.models import Hospital
from users.models import DoctorProfile, PatientProfile, Procedure, Specialization, Education, EventCard


class UserSerializer(serializers.ModelSerializer):
    role = serializers.CharField()

    class Meta:
        model = User
        fields = ('username', 'email', 'role', 'password')

    def create(self, validated_data):
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        role = validated_data.pop('role')
        password = validated_data.pop('password')

        group = Group.objects.get(name__iexact=role)
        user = User.objects.create_user(username, email)
        user.set_password(password)
        user.groups.add(group)
        user.save()
        if group.name == 'doctor':
            DoctorProfile.objects.create(user=user)
        elif group.name == 'patient':
            PatientProfile.objects.create(user=user)


class DoctorProfileSerializer(serializers.ModelSerializer):
    id = serializers.CharField()
    group = serializers.CharField()
    email = serializers.CharField()
    specialization = serializers.CharField()
    education = serializers.CharField()
    hospitals = serializers.CharField()

    class Meta:
        model = DoctorProfile
        fields = ('id', 'group', 'firstname', 'lastname', 'middlename', 'email', 'bio', 'age', 'gender', 'phone_number',
                  'experience', 'specialization', 'education', 'hospitals')

    def create(self, validated_data):
        user_id = validated_data.pop('id')
        firstname = validated_data.pop('firstname')
        lastname = validated_data.pop('lastname')
        middlename = validated_data.pop('middlename')
        email = validated_data.pop('email')
        bio = validated_data.pop('bio')
        age = validated_data.pop('age')
        gender = validated_data.pop('gender')
        phone_number = validated_data.pop('phone_number')
        experience = validated_data.pop('experience')
        specialization = validated_data.pop('specialization')
        education = json.loads(validated_data.pop('education'))
        hospitals = validated_data.pop('hospitals').split(',')

        try:
            user = User.objects.get(pk=user_id)
            doctor_profile, created = DoctorProfile.objects.get_or_create(user_id=user_id,
                                                                          defaults={'firstname': firstname,
                                                                                    'lastname': lastname,
                                                                                    'middlename': middlename,
                                                                                    'bio': bio,
                                                                                    'age': age,
                                                                                    'gender': gender,
                                                                                    'phone_number': phone_number,
                                                                                    'experience': experience})
            if not created:
                doctor_profile.firstname = firstname
                doctor_profile.lastname = lastname
                doctor_profile.middlename = middlename
                doctor_profile.bio = bio
                doctor_profile.age = age
                doctor_profile.gender = gender
                doctor_profile.phone_number = phone_number
                doctor_profile.experience = experience

            doctor_profile.user.email = email
            doctor_profile.user.save()
            Education.objects.filter(doctor_profile=doctor_profile).delete()
            for entry in education:
                doctor_profile.education_set.create(name=entry['entity'],
                                                    date_from=entry['dateFrom'],
                                                    date_to=entry['dateTo'],
                                                    address=entry['address']
                )

            specialization = Specialization.objects.get(pk=specialization)
            doctor_profile.specialization = specialization

            user.doctor_profile = doctor_profile
            user.doctor_profile.save()

            doctor_profile.hospitals.clear()

            hospitals = Hospital.objects.filter(pk__in=hospitals)

            for hospital in hospitals:
                doctor_profile.hospitals.add(hospital)
            user.doctor_profile.save()

        except ObjectDoesNotExist:
            pass


class PatientProfileSerializer(serializers.ModelSerializer):
    id = serializers.CharField()
    group = serializers.CharField()
    email = serializers.CharField()

    class Meta:
        model = PatientProfile
        fields = ('firstname', 'lastname', 'middlename', 'id', 'group',
                  'gender', 'age', 'phone_number', 'address', 'email')

    def create(self, validated_data):
        user_id = validated_data.pop('id')
        firstname = validated_data.pop('firstname')
        lastname = validated_data.pop('lastname')
        middlename = validated_data.pop('middlename')
        gender = validated_data.pop('gender')
        age = validated_data.pop('age')
        phone_number = validated_data.pop('phone_number')
        address = validated_data.pop('address')
        email = validated_data.pop('email')

        try:
            user = User.objects.get(pk=user_id)
            patient_profile, created = PatientProfile.objects\
                .get_or_create(user_id=user_id,
                               defaults={'firstname': firstname,
                                         'lastname': lastname,
                                         'middlename': middlename,
                                         'gender': gender,
                                         'age': age,
                                         'address': address,
                                         'phone_number': phone_number})
            if not created:
                patient_profile.firstname = firstname
                patient_profile.lastname = lastname
                patient_profile.middlename = middlename
                patient_profile.age = age
                patient_profile.gender = gender
                patient_profile.phone_number = phone_number
                patient_profile.address = address

            user.email = email
            patient_profile.save()
            user.save()

        except User.DoesNotExist:
            pass


class EventCardSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField()
    title = serializers.CharField(allow_blank=True)

    class Meta:
        model = EventCard
        fields = ('title', 'user_id')

    def create(self, validated_data):
        title = validated_data.pop('title')
        user_id = validated_data.pop('user_id')
        EventCard.objects.create(title=title, user_id=user_id)