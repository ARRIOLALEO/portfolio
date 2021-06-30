from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.

from .models import Project,Tools
class ProjectsAdmin(SummernoteModelAdmin):
    summernote_fields =('description')
admin.site.register(Project,ProjectsAdmin)
admin.site.register(Tools)
