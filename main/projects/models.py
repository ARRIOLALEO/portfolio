from django.db import models
from django.db.models.fields import CharField
# Create your models here.
class Tools(models.Model):
    model_name = CharField(max_length=250)

    def __str__(self):
        return self.model_name

class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True)
    tools = models.ManyToManyField(Tools)
    project_link = models.CharField(max_length=800,null=True)
    github_link = models.CharField(max_length=800,null=True)
    create_Add = models.DateTimeField(auto_now_add=True)
