from django.contrib.auth.models import User
from django.db import models


class Estate(models.Model):
    name = models.CharField(max_length=255)
    participants = models.ManyToManyField(to=User, related_name='users', null=True)

    def __str__(self):
        return self.name


class EstateItem(models.Model):
    name = models.CharField(max_length=255)
    # bilde? hvordan legge til?
    description = models.TextField()
    value = models.DecimalField(max_digits=12, decimal_places=2)
    belongs_to = models.ForeignKey(to=Estate, related_name="items", on_delete=models.CASCADE)

    def __str__(self):
        return self.name + " - " + self.belongs_to.name
