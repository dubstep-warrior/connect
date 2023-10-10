from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from .serializers import PostSerializer, LikesSerializer, CommentsSerializer
from rest_framework import status
from django.db.models import Q

from .models import *


# Create your views here.   
class PostView(APIView): 
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    parser_class = (FileUploadParser,)

    def get(self, request, pk=None):
        if pk and pk == request.user.pk:
            posts = Post.objects.filter(user__pk=pk).order_by('-date_created')
        else:
            posts = Post.objects.filter(Q(user__connections=request.user.pk) | Q(
                user=request.user.pk)).distinct().order_by('-date_created') 
        return Response({
            'success': True,
            'data': self.serializer_class(posts, many=True).data
        })

    def post(self, request, format=None):
        request_data = self.request.data.copy()
        request_data["user"] = request.user.pk 
        serializer = self.serializer_class(data=request_data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response({
                'success': True,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LikePost(APIView): 
    permission_classes = [IsAuthenticated]
    serializer_class = LikesSerializer

    def post(self, request, format=None):
        request_data = self.request.data.copy()
        request_data["liked_by"] = request.user.pk
        serializer = self.serializer_class(data=request_data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response({
                'success': True,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, format=None):
        like = Like.objects.filter(
            post_id=request.data['post_id'], liked_by=request.user.pk)
        like.delete()
        return Response({
            'success': True
        }, status=status.HTTP_200_OK)


class CommentPost(APIView): 
    permission_classes = [IsAuthenticated]
    serializer_class = CommentsSerializer

    def post(self, request, format=None):
        request_data = self.request.data.copy()
        request_data["commented_by"] = request.user.pk
        serializer = self.serializer_class(data=request_data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response({
                'success': True,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
