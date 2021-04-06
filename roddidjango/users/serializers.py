from rest_framework import serializers

from .models import User


class UserIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
        )


class UserIsAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "is_staff",
        )
