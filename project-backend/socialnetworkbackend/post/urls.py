from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from post import views

urlpatterns = [
    path('api/post/', views.PostView.as_view(), name='post'),
    path('api/post/<int:pk>', views.PostView.as_view(), name='post'),
    path('api/like_post/', views.LikePost.as_view(), name='like_post'),
    path('api/comment/', views.CommentPost.as_view(), name='comment'),
]

urlpatterns = format_suffix_patterns(urlpatterns)