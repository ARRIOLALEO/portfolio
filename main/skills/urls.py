from django.urls import path
from . import views

urlpatterns =[
    path('api/skils',views.SkillListCreate.as_view()),
]

