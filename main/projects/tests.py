from django.test import Client, TestCase
from .models import Project

# Create your tests here.

class ProjectsTestCase(TestCase):
    def setUp(self):
        # create project
        firstproject = Project.objects.create(title='this is a test',intro='this is the intro of my project',article='and troject')
        secondProject = Project.objects.create(title='another test',intro='tgus us the inftro second',article='description') 

    def test_Count_Projects(self):
        a = Project.objects.all()
        self.assertEqual(a.count(),2)

