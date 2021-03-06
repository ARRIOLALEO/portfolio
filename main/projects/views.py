from .models import Project
from .serializers import ProjectSerializer
from rest_framework import generics

# Create your views here.

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
