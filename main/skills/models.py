from django.core import validators
from django.db import models
from django.core.validators import FileExtensionValidator
# Create your models here.
class Skills(models.Model):
    alt = models.CharField(max_length=250)
    image = models.FileField(upload_to="skills",validators=[FileExtensionValidator(['svg'])])
