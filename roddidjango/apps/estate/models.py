from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib import admin


from django.conf import settings


class Estate(models.Model):
    name = models.CharField(max_length=255)
    participants = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='users', blank=True)
    is_settled = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.name






class EstateItem(models.Model):
    name = models.CharField(max_length=255)
    # bilde? hvordan legge til?
    description = models.TextField()
    value = models.DecimalField(max_digits=12, decimal_places=2)
    belongs_to = models.ForeignKey(to=Estate, related_name="items", on_delete=models.CASCADE)
    given_to = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name="items", on_delete=models.SET_NULL, blank=True, null=True)
    donated_or_thrown = models.CharField(max_length=10, blank=True, null=True)
    wants_item = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='userpriorities', blank=True, through='ItemPriority')
    donate_or_throw = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='uservotes', blank=True, through='ItemVote')

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


# Extra classes for making manytomanyrelations visible to the admin panel
class ItemVoteInline(admin.TabularInline):
    model = ItemVote
    extra = 3

class ItemPriorityInline(admin.TabularInline):
    model = ItemPriority
    extra = 3

