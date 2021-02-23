from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import EstateViewSet, EstateItemViewSet

router = DefaultRouter()
router.register("estates",EstateViewSet,basename="clients")
router.register("estate_items", EstateItemViewSet,basename="items")

urlpatterns = [
    path("", include(router.urls)),
]