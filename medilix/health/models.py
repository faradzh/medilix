# from django.db import models
#
# from users.models import UserProfile
#
#
# class Dose(models.Model):
#     dosage = models.CharField()
#     limit = models.IntegerField()
#     timing = models.CharField()
#
#
# class Medication(models.Model):
#     name = models.CharField()
#     comment = models.TextField()
#
#
# class Hospital(models.Model):
#     name = models.CharField()
#     address = models.TextField()
#     photo = models.ImageField()
#
#
# class Prescription(models.Model):
#     dose = models.OneToOneField(Dose)
#     medication = models.ForeignKey(Medication)
#     from_date = models.DateField()
#     to_date = models.DateField()
#     comment = models.TextField()
#
#
# class Appointments(models.Model):
#     patient = models.ForeignKey(UserProfile)
#     doctor = models.ForeignKey(UserProfile)
#     prescription = models.OneToOneField(Prescription)
#     date = models.DateTimeField()
#     comment = models.TextField()
