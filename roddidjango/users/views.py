from django.shortcuts import render

# Create your views here.
from .models import User
from rest_framework import viewsets
from django.conf import settings

from .serializers import UserIdSerializer


class UserIdViewSet(viewsets.ModelViewSet):
    serializer_class = UserIdSerializer

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

