from rest_framework import serializers
from .models import *  

from account.serializers import AppUserProfileSerializer

class MessageSerializer(serializers.ModelSerializer):    
    user_profile = serializers.SerializerMethodField()

    def get_user_profile(self, msg):
        user_qs = AppUser.objects.get(id=msg.user.pk) 
        return AppUserProfileSerializer(user_qs).data

    class Meta:
        model = Message
        fields = ('chat', 'user', 'message', 'date_created', 'user_profile') 

class ChatsSerializer(serializers.ModelSerializer):    
    messages = serializers.SerializerMethodField()
    users = AppUserProfileSerializer(many=True, partial=True) 
    
    def get_messages(self, chat):
        messages_qs = Message.objects.filter(chat=chat.id).order_by('date_created')
        return MessageSerializer(messages_qs, many=True).data
    
    class Meta:
        model = Chat
        fields = ('id', 'name', 'image', 'chatroom', 'users', 'messages') 

