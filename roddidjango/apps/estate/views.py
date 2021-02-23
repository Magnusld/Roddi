from django.shortcuts import render

from rest_framework import viewsets

from .serializers import EstateSerializer, EstateItemSerializer
from .models import Estate, EstateItem

class EstateViewSet(viewsets.ModelViewSet):
    serializer_class = EstateSerializer
    queryset = Estate.objects.all()


class EstateItemViewSet(viewsets.ModelViewSet):
    serializer_class = EstateItemSerializer
    queryset = EstateItem.objects.all()
