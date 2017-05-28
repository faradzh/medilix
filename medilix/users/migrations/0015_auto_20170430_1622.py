# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-30 16:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0014_auto_20170430_1102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='data_from',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='education',
            name='data_to',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='education',
            name='doctor_profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='education', to='users.DoctorProfile'),
        ),
    ]
