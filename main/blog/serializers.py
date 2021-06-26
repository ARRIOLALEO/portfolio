from django.db.models import fields
from rest_framework import serializers
from .models import Post, Categories

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('categorie_name',)

class PostSerializer(serializers.ModelSerializer):
    categorie = CategorieSerializer(read_only=True, many=True)
    class Meta:
        model = Post
        fields = ('title','description','image','day_creation','categorie')
