from django.contrib import admin
from .models import *

# Register your models here.
class AppUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'password', 'description','profile_img', 'native', 'learning') 


admin.site.register(AppUser, AppUserAdmin)