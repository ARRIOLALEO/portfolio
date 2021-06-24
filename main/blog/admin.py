from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

from .models import Post,Categories

class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('description')
admin.site.register(Post, PostAdmin)

admin.site.register(Categories)
