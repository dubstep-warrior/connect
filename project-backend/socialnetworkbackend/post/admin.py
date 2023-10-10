from django.contrib import admin
from .models import *

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('user', 'description', 'image', 'date_created') 


class LikeAdmin(admin.ModelAdmin):
    list_display = ('id','post_id', 'liked_by') 


admin.site.register(Post, PostAdmin)
admin.site.register(Like, LikeAdmin)