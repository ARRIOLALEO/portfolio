from rest_framework import fields, serializers
from .models import Skills
class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('alt', 'image')
