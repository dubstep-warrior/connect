from django.contrib import admin
from .models import *

# Register your models here.
class ConnectionRequestAdmin(admin.ModelAdmin):
    list_display = ('request_from','request_to') 


admin.site.register(ConnectionRequest, ConnectionRequestAdmin)