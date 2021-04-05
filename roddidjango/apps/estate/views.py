from rest_framework import viewsets

from .serializers import EstateSerializer, EstateItemSerializer, ItemVoteSerializer, ItemPrioritySerializer
from .models import Estate, EstateItem, ItemVote, ItemPriority
from django.shortcuts import get_object_or_404
import math
import operator
from decimal import Decimal


class EstateViewSet(viewsets.ModelViewSet):
    serializer_class = EstateSerializer
    queryset = Estate.objects.all()


class EstateItemViewSet(viewsets.ModelViewSet):
    serializer_class = EstateItemSerializer
    queryset = EstateItem.objects.all()

    def get_queryset(self):
        estateID = self.request.query_params.get(key='estateID', default=None)
        if estateID is None:
            return self.queryset.all()
        return self.queryset.filter(belongs_to=self.request.query_params.get(key='estateID', default=None))


class ItemVoteViewSet(viewsets.ModelViewSet):
    serializer_class = ItemVoteSerializer
    queryset = ItemVote.objects.all()

    def get_queryset(self):
        item_id = self.request.query_params.get(key='itemID', default=None)
        if item_id is None:
            return self.queryset.all()
        else:
            return self.queryset.all().filter(user=self.request.user.id,
                                              item=self.request.query_params.get(key='itemID', default=None))


class ItemPriorityViewSet(viewsets.ModelViewSet):
    serializer_class = ItemPrioritySerializer
    queryset = ItemPriority.objects.all()

    def get_queryset(self):
        item_id = self.request.query_params.get(key='itemID', default=None)
        if item_id is None:
            return self.queryset.all()
        else:
            return self.queryset.all().filter(user=self.request.user.id,
                                              item=self.request.query_params.get(key='itemID', default=None))


class DistributeItemsViewSet(viewsets.ModelViewSet):
    serializer_class = EstateItemSerializer
    queryset = Estate.objects.all()
    permission_classes = []
    global users
    global items
    global ItemVotes
    global ItemPriorities

    userValueDict = {

    }

    userNorValueDict = {

    }

    userPrioDict = {}

    def get_queryset(self):
        estateID = self.request.query_params.get(key='estateID', default=None)
        if estateID is None:
            return self.queryset.all()
        else:
            self.settleEstate(get_object_or_404(Estate, pk=estateID))

    def settleEstate(self, estate):
        self.users = estate.participants.all()
        self.items = EstateItem.objects.all().filter(belongs_to=estate.id)
        self.itemVotes = ItemVote.objects.all().filter(item__belongs_to=estate.id)
        self.itemPriorities = ItemPriority.objects.all().filter(item__belongs_to=estate.id)
        for user in self.users:
            self.userValueDict[user.id] = 0
            self.userNorValueDict[user.id] = 0
            self.userPrioDict[user.id] = {}
            for prio in self.itemPriorities:
                if user.id == prio.user.id:
                    self.userPrioDict[user.id][prio.item.id] = prio.priority


        for item in self.items:
            itemid = item.id
            self.giveItem(itemid)
            


    def normalizeDict(self, inputdict):
        d = inputdict
        factor = 1.0 / math.fsum(d.values())
        factor = Decimal(factor)
        for k in d:
            decValue = Decimal(float(d[k]))
            d[k] = decValue * factor
        key_for_max = max(d.items(), key=operator.itemgetter(1))[0]
        diff = 1.0 - math.fsum(d.values())
        d[key_for_max] += Decimal(diff)
        return d

    def giveItem(self, itemid):
        results = {}
        for user in self.users:
            if itemid in self.userPrioDict[user.id].keys():
                tempvalue = self.userNorValueDict[user.id]
                if(tempvalue==0):
                    tempvalue = 0.1
                results[user.id] = self.userPrioDict[user.id][itemid] * (1/tempvalue)
        winnerid = self.keywithmaxval(results)
        winner = self.users.get(id = winnerid)
        item = self.items.get(id = itemid)
        item.given_to = winner
        item.save()
        print(winner, item)
        self.userValueDict[winnerid] = self.userValueDict[winnerid] + item.value 
        self.userNorValueDict = self.normalizeDict(self.userValueDict)
        
    
    def keywithmaxval(self, d):
        key = max(d.items(), key=operator.itemgetter(1))[0]
        return key
