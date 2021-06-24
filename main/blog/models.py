from django.core import validators
from django.core.exceptions import TooManyFieldsSent
from django.db.models.fields import CharField, DateField
from django.db import models
from tinymce import models as tinymce_models

# Create your models here.
def upload_to(instance,filename):
    return 'blog/{filename}'.format(filename=filename)

class Categories(models.Model):
    categorie_name = CharField(max_length=250)
    
    def __str__(self):
        return  self.categorie_name

class Post(models.Model):
    title =models.CharField(max_length=500)
    image = models.FileField(upload_to=upload_to, validators=[validators.FileExtensionValidator(['svg'])])
    description = models.TextField(null=True)
    day_creation =models.DateTimeField(auto_now_add=True)
    categorie = models.ManyToManyField(Categories)

    def __str__(self):
        return  self.title



