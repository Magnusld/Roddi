from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import EstateViewSet, EstateItemViewSet, ItemPriorityViewSet, ItemVoteViewSet

router = DefaultRouter()
router.register("estates",EstateViewSet,basename="estates")
router.register("items", EstateItemViewSet,basename="items")
router.register("itemvotes", ItemVoteViewSet, basename="itemvotes")
router.register("itempriority", ItemPriorityViewSet, basename="itempriority")

urlpatterns = [
    path("", include(router.urls)),
]