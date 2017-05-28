# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-30 10:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_auto_20170430_1031'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctorprofile',
            name='education',
        ),
        migrations.AddField(
            model_name='education',
            name='doctor_profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.DoctorProfile'),
        ),
    ]
