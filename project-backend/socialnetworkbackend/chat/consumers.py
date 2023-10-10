import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import Chat
from asgiref.sync import sync_to_async
from .serializers import ChatsSerializer, MessageSerializer 
from channels.db import database_sync_to_async

class ChatConsumer(AsyncWebsocketConsumer):

    http_user = True   

    @database_sync_to_async
    def check_base_permission(self, user, chat_id):
        chat = Chat.objects.get(id = chat_id) 
        return user in chat.users.all() 

    @database_sync_to_async
    def message_serializer_check_save_data(self, data):
        serializer = MessageSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        x = serializer.create(serializer.validated_data)
        return MessageSerializer(x).data
    
    @database_sync_to_async
    def chat_serializer_data(self, data):
        serializer = ChatsSerializer(data) 
        return serializer.data

    async def connect(self): 
        user = self.scope['user']
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        print('connection establishing ', self.room_name, self.channel_name) 
        # Join room group 
        if user.is_authenticated and (await self.check_base_permission(user, self.room_name)):
            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )

            await self.accept()
            chats = (await sync_to_async(Chat.objects.get)(id=self.room_name)) 
            await self.send(text_data=json.dumps({
                'type': 'connection',
                'data': await self.chat_serializer_data(chats)
            })) 
        else:
            self.close()


    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    async def receive(self, text_data): 
        text_data_json = json.loads(text_data)
        text_data_json['user'] = self.scope['user'].pk 

        m = await self.message_serializer_check_save_data(text_data_json)
        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message', 
                'message': m
            }
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'type': 'chat_message',
            'data': message
        }))
