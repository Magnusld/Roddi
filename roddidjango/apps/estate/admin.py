from django.contrib import admin

# Register your models here.

from .models import Estate, EstateItem, ItemPriorityInline, ItemVoteInline

class EstateItemAdmin(admin.ModelAdmin):
    inlines = (ItemVoteInline,ItemPriorityInline)

admin.site.register(Estate)
admin.site.register(EstateItem,EstateItemAdmin)