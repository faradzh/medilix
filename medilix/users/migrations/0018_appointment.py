# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-12 08:26
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0017_eventcard'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_from', models.DateTimeField()),
                ('date_to', models.DateTimeField()),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.DoctorProfile')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.PatientProfile')),
            ],
        ),
    ]
