from rest_framework import serializers
from .models import *

class ConnectionsSerializer(serializers.ModelSerializer):   
    
    class Meta:
        model = ConnectionRequest
        fields = ('request_from', 'request_to') 

 