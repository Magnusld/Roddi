from django.db.models import QuerySet
from rest_framework import viewsets

from .serializers import EstateSerializer, EstateItemSerializer, ItemVoteSerializer, ItemPrioritySerializer
from .models import Estate, EstateItem, ItemVote, ItemPriority


class EstateViewSet(viewsets.ModelViewSet):
    serializer_class = EstateSerializer
    queryset = Estate.objects.all()

    def get_queryset(self):
        assert self.queryset is not None, (
                "'%s' should either include a `queryset` attribute, "
                "or override the `get_queryset()` method."
                % self.__class__.__name__
        )
        queryset = self.queryset
        if isinstance(queryset, QuerySet):
            if self.request.user.is_staff == True:
                queryset = queryset.all()
            else:
                queryset = queryset.all().filter(participants__in=[self.request.user.id])
        return queryset


class EstateItemViewSet(viewsets.ModelViewSet):
    serializer_class = EstateItemSerializer
    queryset = EstateItem.objects.all()

    def get_queryset(self):
        estateID = self.request.query_params.get(key='estateID', default=None)
        if estateID is None:
            return self.queryset.all()
        return self.queryset.filter(belongs_to=self.request.query_params.get(key='estateID', default=None))


class ItemVoteViewSet(viewsets.ModelViewSet):
    serializer_class = ItemVoteSerializer
    queryset = ItemVote.objects.all()

    def get_queryset(self):
        item_id = self.request.query_params.get(key='itemID', default=None)
        if item_id is None:
            return self.queryset.all()
        else:
            return self.queryset.all().filter(user=self.request.user.id,
                                              item=self.request.query_params.get(key='itemID', default=None))


class ItemPriorityViewSet(viewsets.ModelViewSet):
    serializer_class = ItemPrioritySerializer
    queryset = ItemPriority.objects.all()

    def get_queryset(self):
        item_id = self.request.query_params.get(key='itemID', default=None)
        if item_id is None:
            return self.queryset.all()
        else:
            return self.queryset.all().filter(user=self.request.user.id,
                                              item=self.request.query_params.get(key='itemID', default=None))
