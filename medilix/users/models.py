from django.contrib.auth.models import User
from django.db import models


class Role(models.Model):
    name = models.CharField(max_length=255)


class UserProfile(models.Model):
    user = models.OneToOneField(User)
    role = models.ForeignKey(Role)
