# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-18 18:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20170305_1125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='role',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.Group'),
        ),
        migrations.DeleteModel(
            name='Role',
        ),
    ]
