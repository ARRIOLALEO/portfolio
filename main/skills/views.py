from .models import Skills
from .serializers import SkillsSerializer
from rest_framework import generics
# Create your views here.

class SkillListCreate(generics.ListCreateAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer  
