from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from connect import views

urlpatterns = [
    path('api/possible_connects/<str:connection_type>', views.ConnectUsersList.as_view()),
    path('api/possible_connects/', views.ConnectUsersList.as_view(), name='connect-user-list'),
    path('api/add/', views.AddUser.as_view(), name='add-user'),
    path('api/confirm/<str:action>', views.ConfirmRequest.as_view(), name='confirm'),
]

urlpatterns = format_suffix_patterns(urlpatterns)