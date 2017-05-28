# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-12 21:00
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('health', '0002_auto_20170430_0922'),
        ('users', '0021_auto_20170512_2312'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('complaints', models.TextField()),
                ('date', models.DateTimeField()),
                ('status', models.CharField(max_length=100)),
                ('doctor_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.DoctorProfile')),
                ('hospital', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='health.Hospital')),
                ('patient_profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.PatientProfile')),
            ],
        ),
    ]
