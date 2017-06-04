from django.contrib.auth.models import User, Group
from django.db import models


class Procedure(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=1000, null=True)

    def __str__(self):
        return self.name


class Hospital(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255, null=True)
    # photo = models.ImageField()

    def __str__(self):
        return self.name


class Specialization(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=1000, null=True)
    procedures = models.ManyToManyField(Procedure, related_name='procedures')

    def __str__(self):
        return self.name


class DoctorProfile(models.Model):
    user = models.OneToOneField(User, related_name='doctor_profile')
    firstname = models.CharField(max_length=255, null=True)
    lastname = models.CharField(max_length=255, null=True)
    middlename = models.CharField(max_length=255, null=True)
    bio = models.TextField(max_length=1000)
    age = models.IntegerField(null=True)
    gender = models.CharField(max_length=10, null=True)
    phone_number = models.CharField(max_length=255, null=True)
    experience = models.FloatField(null=True)
    specialization = models.OneToOneField(Specialization, null=True)
    hospitals = models.ManyToManyField(Hospital)

    def __str__(self):
        return '%s %s' % (self.firstname, self.lastname)


class Education(models.Model):
    name = models.CharField(max_length=255)
    date_from = models.CharField(max_length=255)
    date_to = models.CharField(max_length=255)
    description = models.TextField(max_length=1000, null=True)
    address = models.CharField(max_length=255, null=True)
    doctor_profile = models.ForeignKey(DoctorProfile, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Employment(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    date_from = models.DateField()
    date_to = models.DateField()
    address = models.CharField(max_length=255)
    doctor_profile = models.ForeignKey(DoctorProfile, on_delete=models.CASCADE, null=True)


class Courses(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    date_from = models.DateField()
    date_to = models.DateField()
    address = models.CharField(max_length=255)
    doctor_profile = models.ForeignKey(DoctorProfile, on_delete=models.CASCADE, null=True)


class PatientProfile(models.Model):
    user = models.OneToOneField(User, related_name='patient_profile')
    firstname = models.CharField(max_length=255, null=True)
    lastname = models.CharField(max_length=255, null=True)
    middlename = models.CharField(max_length=255, null=True)
    address = models.TextField(max_length=100, null=True)
    age = models.IntegerField(null=True)
    gender = models.CharField(max_length=10, null=True)
    phone_number = models.CharField(max_length=20, null=True)


class EventCard(models.Model):
    title = models.CharField(max_length=255)
    user = models.ForeignKey(User)


class Appointment(models.Model):
    patient = models.ForeignKey(PatientProfile)
    doctor = models.ForeignKey(DoctorProfile)
    date_from = models.DateTimeField()
    date_to = models.DateTimeField()
    hospital = models.ForeignKey(Hospital, null=True)
    status = models.CharField(max_length=100, default='pending')
    visit_number = models.CharField(default=1, max_length=5)


class HospitalPrice(models.Model):
    doctor = models.ForeignKey(DoctorProfile)
    hospital = models.ForeignKey(Hospital)
    price = models.CharField(max_length=30)


class Notification(models.Model):
    complaints = models.TextField()
    date = models.DateTimeField()
    patient_profile = models.ForeignKey(PatientProfile, related_name='patient_profile_id')
    doctor_profile = models.ForeignKey(DoctorProfile, related_name='doctor_profile_id')
    hospital = models.ForeignKey(Hospital)
    status = models.CharField(max_length=100, default='pending')
    visit_number = models.CharField(default=1, max_length=5)

    def __str__(self):
        return 'Between %s and %s' % (self.patient_profile.firstname, self.doctor_profile.firstname)


class Feedback(models.Model):
    content = models.TextField()
    attentiveness = models.FloatField()
    qualification = models.FloatField()
    quality = models.FloatField()
    qualityToPrice = models.FloatField()
    recommendation = models.BooleanField()
    doctor_profile = models.ForeignKey(DoctorProfile, on_delete=models.CASCADE)
    patient_profile = models.ForeignKey(PatientProfile, on_delete=models.CASCADE)

    def __str__(self):
        return 'From %s about %s.' % (self.patient_profile, self.doctor_profile)