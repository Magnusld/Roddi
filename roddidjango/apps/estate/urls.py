from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import EstateViewSet, EstateItemViewSet

router = DefaultRouter()
router.register("estates",EstateViewSet,basename="estates")
router.register("items", EstateItemViewSet,basename="items")

urlpatterns = [
    path("", include(router.urls)),
]