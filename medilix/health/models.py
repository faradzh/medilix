from django.db import models
from users.models import Appointment, PatientProfile, DoctorProfile


class Dose(models.Model):
    dosage = models.CharField(max_length=255)
    limit = models.IntegerField()
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
    from_date = models.DateField()
    to_date = models.DateField()
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