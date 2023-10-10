from rest_framework import serializers
from .models import * 
from account.serializers import *

class CommentsSerializer(serializers.ModelSerializer):  
    profile = serializers.SerializerMethodField()

    def get_profile(self, comment):
        user_qs = AppUser.objects.get(email=comment.commented_by)
        return AppUserProfileSerializer(user_qs).data 
    
    class Meta:
        model = Comment
        fields = ('post_id', 'commented_by', 'description','date_commented', 'profile') 

class LikesSerializer(serializers.ModelSerializer):   
    
    class Meta:
        model = Like
        fields = ('post_id', 'liked_by') 

class PostSerializer(serializers.ModelSerializer): 
    profile = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()

    def get_comments(self, post):
        comments_qs = Comment.objects.filter(post_id = post.id).order_by('-date_commented')
        return CommentsSerializer(comments_qs,many=True).data 
    
    def get_likes(self, post):
        liked_by_qs = Like.objects.filter(post_id = post.id)
        return LikesSerializer(liked_by_qs,many=True).data 

    def get_profile(self, post):
        user_qs = AppUser.objects.get(email=post.user)
        return AppUserProfileSerializer(user_qs).data 
    
    class Meta:
        model = Post
        fields = ('id', 'user','description',
                  'image', 'date_created', 'profile', 'likes', 'comments') 
        
 