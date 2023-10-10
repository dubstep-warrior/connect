from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response

from account.models import AppUser
from account.serializers import AppUserProfileSerializer

from rest_framework import status

from .serializers import ConnectionsSerializer
from .models import ConnectionRequest

# Create your views here.


class ConnectUsersList(APIView): 
    permission_classes = [IsAuthenticated]

    def get(self, request, connection_type=''):  
        users = AppUser.objects.filter(
            learning=request.user.native, native=request.user.learning)
        if (connection_type == 'outgoing'):
            parsed_user = users.filter(
                request_to__request_from=request.user.pk)
        elif (connection_type == 'incoming'):
            parsed_user = users.filter(
                request_from__request_to=request.user.pk)
        elif (connection_type == 'current'):
            parsed_user = request.user.connections
        else:
            parsed_user = users.exclude(request_to__request_from=request.user.pk).exclude(
                request_from__request_to=request.user.pk).exclude(connections=request.user.pk)
        user_serializer = AppUserProfileSerializer(parsed_user, many=True)
        return Response({
            'success': True,
            'data': user_serializer.data
        }, status=status.HTTP_200_OK)


class AddUser(APIView): 
    permission_classes = [IsAuthenticated]
    serializer_class = ConnectionsSerializer

    def post(self, request, format=None):
        request_data = self.request.data.copy()
        request_data["request_from"] = request.user.pk
        serializer = self.serializer_class(data=request_data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'success': True,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ConfirmRequest(APIView): 
    permission_classes = [IsAuthenticated]

    def delete(self, request, action):
        request_data = self.request.data.copy()
        request_data["request_to"] = request.user.pk
        cr = ConnectionRequest.objects.get(
            request_from=request_data["request_from"], request_to=request_data["request_to"])
        cr.delete()
        if action == 'add':
            request_to = AppUser.objects.get(pk=request.user.pk)
            request_from = AppUser.objects.get(pk=request_data["request_from"])
            request_to.connections.add(request_from)
            request_from.connections.add(request_to)
        return Response({
            'success': True
        })
