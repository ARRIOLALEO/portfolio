# Generated by Django 3.2.4 on 2021-06-21 06:23

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skills',
            name='image',
            field=models.FileField(upload_to='skills', validators=[django.core.validators.FileExtensionValidator(['svg'])]),
        ),
    ]
