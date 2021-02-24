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

    def get_queryset(self):
        return self.queryset.filter(belongs_to=self.request.query_params.get(key='estateID', default=None))
