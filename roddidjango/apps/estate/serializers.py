from rest_framework import serializers
from .models import Estate, EstateItem, ItemVote, ItemPriority


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

class ItemVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemVote

        fields = '__all__'

class ItemPrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPriority

        fields = '__all__'