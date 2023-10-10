from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from chat import views

urlpatterns = [
    path('api/chat/', views.ChatView.as_view(), name='chat'),
    path('api/message/', views.MessageView.as_view(), name='message') 
]

urlpatterns = format_suffix_patterns(urlpatterns)