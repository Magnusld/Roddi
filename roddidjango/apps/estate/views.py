from django.db.models import QuerySet
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

    def get_queryset(self):
        assert self.queryset is not None, (
                "'%s' should either include a `queryset` attribute, "
                "or override the `get_queryset()` method."
                % self.__class__.__name__
        )
        queryset = self.queryset
        if isinstance(queryset, QuerySet):
            if self.request.user.is_staff == True:
                queryset = queryset.all()
            else:
                queryset = queryset.all().filter(participants__in=[self.request.user.id])
        return queryset


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

    userVoteDict = {}

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
            self.userVoteDict[user.id] = {}
            for prio in self.itemPriorities:
                if user.id == prio.user.id:
                    self.userPrioDict[user.id][prio.item.id] = prio.priority
            for vote in self.itemVotes:
                if user.id == vote.user.id:
                    print(vote.donate)
                    self.userVoteDict[user.id][vote.item.id] = vote.donate


        for item in self.items:
            itemid = item.id
            self.giveItem(itemid)

        estate.is_settled = True
        estate.save()

    def normalizeDict(self, inputdict):
        d = inputdict
        factor = 1.0 / math.fsum(d.values())
        factor = float(factor)
        for k in d:
            decValue = float(d[k])
            d[k] = decValue * factor
        key_for_max = max(d.items(), key=operator.itemgetter(1))[0]
        diff = 1.0 - math.fsum(d.values())
        d[key_for_max] += float(diff)
        return d

    def giveItem(self, itemid):
        results = {}
        prioCount = 0
        donateCount = 0
        item = self.items.get(id=itemid)
        for user in self.users:
            if itemid in self.userPrioDict[user.id].keys():
                prioCount = prioCount+1
                tempvalue = self.userNorValueDict[user.id]
                results[user.id] = self.userPrioDict[user.id][itemid] + (5 / ((tempvalue * 10) + 1))
            if itemid in self.userVoteDict[user.id].keys():
                if self.userVoteDict[user.id][itemid]:
                    donateCount = donateCount + 1

        if donateCount==0 and prioCount == 0:
            item.donated_or_thrown = "thrown"
            print(item.name, " thrown")
        elif donateCount > prioCount:
            item.donated_or_thrown = "donated"
            print(item.name," donated")
        else:
            winnerid = self.keywithmaxval(results)
            winner = self.users.get(id=winnerid)
            item.given_to = winner
            self.userValueDict[winnerid] = self.userValueDict[winnerid] + float(item.value)
            self.userNorValueDict = self.normalizeDict(self.userValueDict)
            print(winner, item)

        item.save()

        
    
    def keywithmaxval(self, d):
        key = max(d.items(), key=operator.itemgetter(1))[0]
        return key
