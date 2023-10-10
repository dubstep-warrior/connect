from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory
from account.model_factories import UserFactory
from .model_factories import ChatFactory, MessageFactory
from .views import MessageView, ChatView
from django.urls import reverse
from rest_framework import status
from rest_framework.test import force_authenticate
from .models import Chat, Message

# Create your tests here.


class ChatAPITest(APITestCase):

    def setUp(self):
        self.user = UserFactory.create()
        self.user2 = UserFactory.create(pk=2, email='user2@gmail.com', username='user2')
        self.factory = APIRequestFactory()
        self.api = ChatView.as_view()
        self.api_url = reverse('chat')

    def test_get_response(self):
        request = self.factory.get(self.api_url)
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)         

    def test_post_response(self):
        data = {
            'name': 'Test Chatroom',
            'chatroom': 'true', 
            'users': '2',
            'image': None
        }
        request = self.factory.post(self.api_url, data, format='json')
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Chat.objects.get(
            name=data['name']).users.count(), 2)
        self.assertEqual(Chat.objects.get(
            name=data['name']).chatroom, True)

class MessageAPITest(APITestCase):

    def setUp(self):
        self.user = UserFactory.create() 
        self.user2 = UserFactory.create(pk=2, email='user2@gmail.com', username='user2')
        self.chat = ChatFactory.create(users=[self.user.pk, self.user2.pk])
        self.factory = APIRequestFactory()
        self.api = MessageView.as_view()
        self.api_url = reverse('message')          

    def test_post_response(self):
        data = {
            'chat': self.chat.id,
            'user': self.user.pk, 
            'message': 'Hello world' 
        }
        request = self.factory.post(self.api_url, data, format='json')
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Message.objects.all().count(), 1)
        self.assertEqual(Message.objects.get().message, data['message'])
 