from django.contrib import admin

# Register your models here.

from .models import Estate, EstateItem, ItemPriority, ItemVote, ItemPriorityInline, ItemVoteInline

class EstateItemAdmin(admin.ModelAdmin):
    inlines = (ItemVoteInline,ItemPriorityInline)

admin.site.register(Estate)
admin.site.register(EstateItem,EstateItemAdmin)
admin.site.register(ItemPriority)
admin.site.register(ItemVote)