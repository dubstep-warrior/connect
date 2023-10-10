from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory
from .model_factories import PostFactory
from account.model_factories import UserFactory
from .views import PostView, LikePost, CommentPost 
from django.urls import reverse
from rest_framework import status
from rest_framework.test import force_authenticate
from .models import Like, Comment

# Create your tests here.


class PostViewAPITest(APITestCase):

    def setUp(self): 
        self.post = PostFactory.create()
        self.user = self.post.user
        self.factory = APIRequestFactory()
        self.api = PostView.as_view()
        self.api_url = reverse('post')

    def test_get_response(self):
        request = self.factory.get(self.api_url)
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['data']), 1)  
        self.assertEqual(response.data['data'][0]['user'], self.user.pk) 

    def test_post_response(self):
        data = { 
            'description': 'Hello World', 
        }
        request = self.factory.post(self.api_url, data, format='json')
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED) 
        self.assertEqual(response.data['data']['description'], data['description']) 
        self.assertEqual(response.data['data']['user'], self.user.pk)


class LikePostAPITest(APITestCase):

    def setUp(self): 
        self.post = PostFactory.create()
        self.user = UserFactory.create()
        self.factory = APIRequestFactory()
        self.api = LikePost.as_view()
        self.api_url = reverse('like_post')
        self.data = {
            'post_id': self.post.id
        }

    def test_post_response(self):  
        request = self.factory.post(self.api_url, self.data)
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED) 
        self.assertEqual(response.data['data']['post_id'], self.data['post_id']) 
        self.assertEqual(response.data['data']['liked_by'], self.user.pk) 

    def test_delete_response(self): 
        request = self.factory.delete(self.api_url, self.data)
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK) 
        self.assertEqual(Like.objects.all().count(), 0)   


class CommentPostAPITest(APITestCase):

    def setUp(self): 
        self.post = PostFactory.create()
        self.user = UserFactory.create()
        self.factory = APIRequestFactory()
        self.api = CommentPost.as_view()
        self.api_url = reverse('comment')
        self.data = {
            'post_id': self.post.id,
            'commented_by': self.user.pk,
            'description': 'Hello world'
        }

    def test_post_response(self): 
        request = self.factory.post(self.api_url, self.data)
        force_authenticate(request, user=self.user)
        response = self.api(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Comment.objects.all().count(), 1)
        self.assertEqual(response.data['data']['commented_by'], self.user.pk)  
        self.assertEqual(response.data['data']['post_id'], self.post.id)  
 