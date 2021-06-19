from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=150)
    intro = models.CharField(max_length=250)
    article = models.CharField(max_length=15000)
    create_Add = models.DateTimeField(auto_now_add=True)
