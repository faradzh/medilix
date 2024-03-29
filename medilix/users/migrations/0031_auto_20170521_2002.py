# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-21 14:02
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0030_auto_20170520_1735'),
    ]

    operations = [
        migrations.AddField(
            model_name='patientprofile',
            name='address',
            field=models.TextField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='patientprofile',
            name='age',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='patientprofile',
            name='gender',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='patientprofile',
            name='phone_number',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
