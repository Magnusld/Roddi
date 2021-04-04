from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib import admin
import math
import operator

from django.conf import settings


class Estate(models.Model):
    name = models.CharField(max_length=255)
    participants = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='users', blank=True)

    def __str__(self):
        return self.name

    def settleEstate(self):
        users = self.participants.all()
        items = EstateItem.objects.all().filter(belongs_to=self.id)
        itemVotes = ItemVote.objects.all().filter(item__belongs_to=self.id)
        itemPriorities = ItemPriority.objects.all().filter(item__belongs_to=self.id)

        userValueDict = {

        }

        userNorValueDict = {

        }

        userPrioDict = {

        }

        
        for user in users:
            userValueDict[user.id] = 0
            userNorValueDict[user.id] = 0
            userPrioDict[user.id] = {}
            for prio in itemPriorities:
                if user.id == prio.user.id:
                    userPrioDict[user.id][prio.item.id] = prio.priority
        
        
        for item in items:
            giveItem(item.id)
            

    def normalizeDict(inputdict):
        d = inputdict
        factor = 1.0 / math.fsum(d.values())
        for k in d:
            d[k] = d[k] * factor
        key_for_max = max(d.items(), key=operator.itemgetter(1))[0]
        diff = 1.0 - math.fsum(d.values())
        d[key_for_max] += diff
        return d

    def giveItem(itemid):
        results = {}
        for user in users:
            if itemid in userPrioDict[user.id].values:
                tempvalue = userNorValueDict[user.id]
                if(tempvalue==0):
                    tempvalue = 0.1
                results[user.id] = userPrioDict[user.id][itemid].value * (1/tempvalue)
        winnerid = keywithmaxval(results)
        winner = users.filter(id = winnerid)
        item = items.filter(id = itemid)
        item.given_to = winner
        userValueDict[winnerid] = userValueDict[winnerid] + item.value 
        userNorValueDict = normalizeDict(userValueDict)
        
    
    def keywithmaxval(d):
        v=list(d.values())
        k=list(d.keys())
        return k[v.index(max(v))]



class EstateItem(models.Model):
    name = models.CharField(max_length=255)
    # bilde? hvordan legge til?
    description = models.TextField()
    value = models.DecimalField(max_digits=12, decimal_places=2)
    belongs_to = models.ForeignKey(to=Estate, related_name="items", on_delete=models.CASCADE)
    given_to = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name="items", on_delete=models.SET_NULL, blank=True, null=True)
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

