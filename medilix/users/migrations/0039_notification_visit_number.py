# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-06-04 08:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0038_auto_20170604_1244'),
    ]

    operations = [
        migrations.AddField(
            model_name='notification',
            name='visit_number',
            field=models.CharField(default=1, max_length=5),
        ),
    ]
