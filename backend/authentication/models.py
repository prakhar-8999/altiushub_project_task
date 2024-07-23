from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=70)

class tasks(models.Model):
    task = models.CharField(max_length=30)
    task_status = models.CharField(max_length=40)