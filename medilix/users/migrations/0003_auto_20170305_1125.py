# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-05 11:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_token'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='token',
            name='user',
        ),
        migrations.DeleteModel(
            name='Token',
        ),
    ]
