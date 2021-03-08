from django.contrib.auth.models import User
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from django.conf import settings


class Estate(models.Model):
    name = models.CharField(max_length=255)
    participants = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='users', blank=True)

    def __str__(self):
        return self.name



class EstateItem(models.Model):
    name = models.CharField(max_length=255)
    # bilde? hvordan legge til?
    description = models.TextField()
    value = models.DecimalField(max_digits=12, decimal_places=2)
    belongs_to = models.ForeignKey(to=Estate, related_name="items", on_delete=models.CASCADE)
    wants_item = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='users', blank=True, through='ItemPriority')
    donate_or_throw = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='users', blank=True, through='ItemVote')

    def __str__(self):
        return str(self.name) + " - " + str(self.belongs_to.name)

class ItemVote(models.Model):
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    item = models.ForeignKey(to=EstateItem, on_delete=models.CASCADE)
    donate = models.BooleanField()

class ItemPriority(models.Model):
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    item = models.ForeignKey(to=EstateItem, on_delete=models.CASCADE)
    priority = models.IntegerField(validators=[MaxValueValidator(10),MinValueValidator(0)])