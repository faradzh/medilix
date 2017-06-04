# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-06-04 06:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0037_appointment_hospital'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='hospital',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.Hospital'),
        ),
    ]
