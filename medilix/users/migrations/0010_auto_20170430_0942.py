# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-30 09:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_auto_20170430_0918'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorprofile',
            name='procedures',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='procedures', to='users.Procedure'),
        ),
    ]
