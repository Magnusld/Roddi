from django.contrib import admin

# Register your models here.

from .models import Estate, EstateItem

admin.site.register(Estate)
admin.site.register(EstateItem)