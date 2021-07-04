from rest_framework import fields, serializers
from .models import Project,Tools

class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tools
        fields = ('model_name',)

class ProjectSerializer(serializers.ModelSerializer):
    tools = ToolSerializer(read_only=True, many=True)
    class Meta:
        model = Project
        fields =('title','description','tools','project_link','github_link',)
