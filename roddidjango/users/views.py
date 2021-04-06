# Create your views here.
from django.db.models import QuerySet
from rest_framework import viewsets
from rest_framework import permissions

from .models import User
from .serializers import UserIdSerializer, UserIsAdminSerializer, UserReadOnlySerializer


class UserIdViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserIdSerializer

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)


class UserIsAdminViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserIsAdminSerializer

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)


class UserReadOnlyList(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserReadOnlySerializer
    queryset = User.objects.all()