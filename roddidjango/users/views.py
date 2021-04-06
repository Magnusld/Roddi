# Create your views here.
from rest_framework import viewsets

from .models import User
from .serializers import UserIdSerializer, UserIsAdminSerializer


class UserIdViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserIdSerializer

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)


class UserIsAdminViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserIsAdminSerializer

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)
