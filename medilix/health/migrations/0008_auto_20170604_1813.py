# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-06-04 12:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('health', '0007_auto_20170604_1719'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dose',
            name='limit',
            field=models.CharField(max_length=255),
        ),
    ]