from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import UserIdViewSet, UserIsAdminViewSet

router = DefaultRouter()

router.register("UserId", UserIdViewSet, basename="UserId")
router.register("IsStaff", UserIsAdminViewSet, basename="IsStaff")

urlpatterns = [
    path("", include(router.urls)),
]
