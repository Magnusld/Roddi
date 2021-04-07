from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import EstateViewSet, EstateItemViewSet, ItemPriorityViewSet, ItemVoteViewSet, DistributeItemsViewSet, SettlementViewSet
from .views import EstateViewSet, EstateItemViewSet, ItemPriorityViewSet, ItemVoteViewSet, DistributeItemsViewSet, ItemVoteListForItem, ItemPrioListForItem

router = DefaultRouter()
router.register("estates",EstateViewSet,basename="estates")
router.register("settlements",SettlementViewSet,basename="settlements")
router.register("items", EstateItemViewSet,basename="items")
router.register("itemvotes", ItemVoteViewSet, basename="itemvotes")
router.register("itempriority", ItemPriorityViewSet, basename="itempriority")
router.register("settleEstate", DistributeItemsViewSet, basename="settleEstate")
router.register("allvotes", ItemVoteListForItem, basename="allvotes")
router.register("allpriorities", ItemPrioListForItem, basename="allpriorities")

urlpatterns = [
    path("", include(router.urls)),
]