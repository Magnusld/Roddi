from django.conf import settings
from rest_framework import serializers
from .models import User

class UserIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
        "id",
        )
