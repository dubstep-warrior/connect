from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated 
from rest_framework import status
from rest_framework.response import Response


from .serializers import MessageSerializer, ChatsSerializer
from .models import Chat

from account.serializers import AppUserProfileSerializer
from account.models import AppUser


# Create your views here.  
class MessageView(APIView): 
    permission_classes = [IsAuthenticated]
    serializer_class = MessageSerializer

    def post(self, request):

        request_data = self.request.data.copy()
        if ('chat' not in request_data):
            chat = Chat.objects.create(chatroom=bool(
                request_data['chatroom'] == 'true'))
            chat.users.add(request.user.pk)
            chat.users.add(request_data['to'])
            chat.save()
            request_data['chat'] = chat.pk

        request_data["user"] = request.user.pk 
        serializer = self.serializer_class(data=request_data)

        if serializer.is_valid(): 
            serializer.save()
            chats = Chat.objects.filter(users=request.user.pk) 
            return Response({
                'success': True,
                'data': {
                    'currentChat': ChatsSerializer(Chat.objects.get(id=request_data['chat'])).data,
                    'chats': ChatsSerializer(chats, many=True).data
                }
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChatView(APIView): 
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        users = AppUser.objects.get(email=str(request.user)) 
        contacts = AppUser.objects.filter(connections=request.user)
        chats = Chat.objects.filter(users=request.user.pk) 
        return Response({
            'success': True,
            'data': {
                'user': AppUserProfileSerializer(users).data,
                'contacts': AppUserProfileSerializer(contacts, many=True).data,
                'chats': ChatsSerializer(chats, many=True).data
            }
        }, status=status.HTTP_200_OK)

    def post(self, request):  
        request_data = self.request.data.copy() 
        if (request_data['image'] == 'null'):
            request_data.pop('image')
        chat = Chat.objects.create(name=request_data['name'], image=request_data['image'], chatroom=bool(
            request_data['chatroom'] == 'true'))
        chat.users.add(*[int(x) for x in (request_data['users'] +
                       ',' + str(request.user.pk)).split(',')])
        chat.save() 

        return Response({
            'success': True,
            'data': ChatsSerializer(chat).data
        }, status=status.HTTP_201_CREATED)
