from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory
from .model_factories import UserFactory
from .views import ProfileView, RegisterView
from django.urls import reverse
from rest_framework import status
from rest_framework.test import force_authenticate
from .models import AppUser

# Create your tests here.


class ProfileAPITest(APITestCase):

    def setUp(self):
        self.user = UserFactory.create()
        self.factory = APIRequestFactory()
        self.api = ProfileView.as_view()
        self.api_url = reverse('profile_api')

    def test_get_response(self):
        request = self.factory.get(self.api_url)
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, {'success': True, 'data': {
            'user': {
                'id': 1,
                'email': 'person0@gmail.com',
                'handle': 'name 0',
                'description': 'Hello, my name is admin',
                'profile_img': None,
                'status': 'Busy',
                'native': 'en',
                'learning': 'jp',
                'connections': [],
                'username': 'name 0'
            },
            'feed': [],
            'is_user': True
        }})

    def test_update_response(self):
        data = {
            'id': 1,
            'status': 'Free',
            'description': 'Hello, this is a new description'
        }
        request = self.factory.put(self.api_url, data, format='json')
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(AppUser.objects.get(
            pk=data['id']).status, data['status'])
        self.assertEqual(AppUser.objects.get(
            pk=data['id']).description, data['description'])


class RegisterAPITest(APITestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.api = RegisterView.as_view()
        self.api_url = reverse('register_api')

    def test_post_response(self):
        data = {
            'email': 'john@admin.com',
            'password': 'Testing123@',
            'handle': 'john',
            'description': 'Hello, my name is admin',
            'profile_img': None, 
            'native': 'en',
            'learning': 'jp'
        }
        request = self.factory.post(self.api_url, data, format='json')
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(AppUser.objects.count(), 1)    
        self.assertEqual(AppUser.objects.get().username, 'john')