from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import UserIdViewSet

router = DefaultRouter()

router.register("UserId", UserIdViewSet, basename="UserId")

urlpatterns = [
    path("", include(router.urls)),
]