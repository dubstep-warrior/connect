from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from account import views

urlpatterns = [
    path('profile/', views.ProfileView.as_view(),name='profile_api'),
    path('profile/<int:pk>', views.ProfileView.as_view()),
    path('api/auth/', views.CustomAuthToken.as_view()),
    path('api/register/', views.RegisterView.as_view(),name='register_api')
]

urlpatterns = format_suffix_patterns(urlpatterns)