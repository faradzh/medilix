# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-29 18:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0032_auto_20170528_0028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorprofile',
            name='age',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='doctorprofile',
            name='experience',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='doctorprofile',
            name='phone_number',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
