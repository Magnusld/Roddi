from django.shortcuts import render

from rest_framework import viewsets

from .serializers import EstateSerializer, EstateItemSerializer, ItemVoteSerializer, ItemPrioritySerializer
from .models import Estate, EstateItem, ItemVote, ItemPriority

class EstateViewSet(viewsets.ModelViewSet):
    serializer_class = EstateSerializer
    queryset = Estate.objects.all()


class EstateItemViewSet(viewsets.ModelViewSet):
    serializer_class = EstateItemSerializer
    queryset = EstateItem.objects.all()

    def get_queryset(self):
        return self.queryset.filter(belongs_to=self.request.query_params.get(key='estateID', default=None))

class ItemVoteViewSet(viewsets.ModelViewSet):
    serializer_class = ItemVoteSerializer
    queryset = ItemVote.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.query_params.get(key='userID', default=None),
                                    item=self.request.query_params.get(key='itemID', default=None))

class ItemPriorityViewSet(viewsets.ModelViewSet):
    serializer_class = ItemPrioritySerializer
    queryset = ItemPriority.objects.all()
                                                                                                            
    def get_queryset(self):
        return self.queryset.filter(user=self.request.query_params.get(key='userID', default=None),
                                    item=self.request.query_params.get(key='itemID', default=None))
