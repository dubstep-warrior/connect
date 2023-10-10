from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory
from account.model_factories import UserFactory
from .model_factories import ConnectionFactory
from .views import ConnectUsersList, AddUser, ConfirmRequest
from django.urls import reverse
from rest_framework import status
from rest_framework.test import force_authenticate
# from .models import AppUser

# Create your tests here.


class ConnectUsersListAPITest(APITestCase):

    def setUp(self):
        self.user0 = UserFactory.create(native='en', learning='jp')
        self.user1 = UserFactory.create(
            username='user1', native='jp', learning='en')
        self.factory = APIRequestFactory()
        self.api = ConnectUsersList.as_view()
        self.api_url = reverse('connect-user-list')

    def test_get_response(self):
        request = self.factory.get(self.api_url)
        force_authenticate(request, user=self.user0)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(next(iter(response.data['data']))['handle'], 'user1')


class AddUserAPITest(APITestCase):

    def setUp(self):
        self.user0 = UserFactory.create(native='en', learning='jp')
        self.user1 = UserFactory.create(
            username='user1', native='jp', learning='en')
        self.factory = APIRequestFactory()
        self.api = AddUser.as_view()
        self.api_url = reverse('add-user')

    def test_post_response(self):
        data = {
            'request_to': str(self.user1.pk)
        }
        request = self.factory.post(self.api_url, data, format='json')
        force_authenticate(request, user=self.user0)
        response = self.api(request)  
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['data']['request_from'], self.user0.pk)
        self.assertEqual(response.data['data']['request_to'], self.user1.pk)


class ConfirmRequestAPITest(APITestCase):

    def setUp(self):
        self.connection = ConnectionFactory.create()
        self.user = self.connection.request_to
        self.factory = APIRequestFactory()
        self.api = ConfirmRequest.as_view()
        self.api_url = reverse('confirm', kwargs={'action': 'add'})

    def test_delete_response(self): 
        data = {
            'request_from': self.connection.request_from.pk 
        }
        request = self.factory.delete(self.api_url, data, format='json')
        force_authenticate(request, user=self.user)
        response = self.api(request, action='add')    
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(self.user.connections.all()[0].pk, self.connection.request_from.pk)
        self.assertEqual(self.connection.request_from.connections.all()[0].pk, self.user.pk)  
 
