from django.contrib import admin
from .models import *
# Register your models here.
class ChatAdmin(admin.ModelAdmin):
    list_display = ('id', 'chatroom','name','image','get_users')  

class MessageAdmin(admin.ModelAdmin):
    list_display = ('chat', 'user', 'message','date_created') 


admin.site.register(Chat, ChatAdmin)
admin.site.register(Message, MessageAdmin)
 