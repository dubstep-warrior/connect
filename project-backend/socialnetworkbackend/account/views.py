from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import login

from .models import *
from post.models import *
from .serializers import AppUserSerializer, AppUserProfileSerializer
from post.serializers import PostSerializer
 
from rest_framework.permissions import AllowAny
from rest_framework.parsers import FileUploadParser
from rest_framework import status

# Create your views here. 

class ProfileView(APIView): 
    permission_classes = [IsAuthenticated]  

    def get(self, request, pk= None):   
        users = AppUser.objects.get(id=pk if pk else request.user.id)
        posts = Post.objects.filter(user__id=pk if pk else request.user.id).order_by('-date_created') 
        return Response({
            'success': True,
            'data': {
                'user': AppUserProfileSerializer(users).data,
                'feed': PostSerializer(posts, many=True).data,
                'is_user': False if pk else True
            }
        }, status=status.HTTP_200_OK)

    def put(self, request, format=None):  
        instance = AppUser.objects.get(pk=request.user.pk) 
        serializer = AppUserProfileSerializer(instance, data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'success': True,
                'data': serializer.data
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'email': user.email, 
            'user_id': user.pk 
        }) 


class RegisterView(APIView): 
    permission_classes = [AllowAny]
    serializer_class = AppUserSerializer
    parser_class = (FileUploadParser,) 

    def post(self, request):
        print('view is reached')
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)   
        serializer.save()
        return Response({
            'success': True,
            'data': serializer.data 
        }, status=status.HTTP_201_CREATED) 
 