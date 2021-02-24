from rest_framework import serializers
from .models import Estate, EstateItem


class EstateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estate

        fields = (
            "id",
            "name",
            "participants",
        )

class EstateItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstateItem

        fields = '__all__'