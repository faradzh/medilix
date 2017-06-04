from django.db import models
from users.models import Appointment, PatientProfile, DoctorProfile


class Dose(models.Model):
    dosage = models.CharField(max_length=255)
    limit = models.CharField(max_length=255)
    timing = models.CharField(max_length=255)


class Medication(models.Model):
    name = models.CharField(max_length=255)
    comment = models.TextField()


class Blank(models.Model):
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE)
    complaints = models.TextField()
    prov_diagnosis = models.CharField(max_length=255, null=True)
    final_diagnosis = models.CharField(max_length=255, null=True)


class Prescription(models.Model):
    dose = models.OneToOneField(Dose)
    medication = models.ForeignKey(Medication)
    duration = models.CharField(max_length=50, null=True)
    comment = models.TextField()
    blank = models.ForeignKey(Blank)


class Examination(models.Model):
    content = models.TextField()
    results = models.TextField(null=True)
    blank = models.ForeignKey(Blank)


class MedicalRecord(models.Model):
    doctor_fullname = models.CharField(max_length=255)
    date = models.DateTimeField()
    blank = models.OneToOneField(Blank)
    hospital_name = models.CharField(max_length=255)