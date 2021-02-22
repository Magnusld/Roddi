from django.contrib.auth.models import User
from django.db import models

class Estate(models.Model):
    name = models.CharField(max_length=255)
    participants = models.ManyToManyField(to=User,related_name='users')

class EstateItem(models.Model):
    name = models.CharField(max_length=255)
    #bilde? hvordan legge til?
    value = models.DecimalField(max_digits=12,decimal_places=2)
    belongs_to = models.ForeignKey(to=Estate,on_delete=models.CASCADE)
