from django.core import validators
from django.db import models
from django.core.validators import FileExtensionValidator
# Create your models here.
def upload_to(instance,filename):
    return 'skills/{filename}'.format(filename=filename)
class Skills(models.Model):
    alt = models.CharField(max_length=250)
    image = models.FileField(upload_to=upload_to,validators=[FileExtensionValidator(['svg'])])
