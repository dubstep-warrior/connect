from rest_framework import serializers
from .models import *
from base_classes.base_serializer_class import DynamicFieldsModelSerializer
from rest_framework.validators import UniqueValidator


class AppUserSerializer(serializers.ModelSerializer):
    handle = serializers.CharField(source='username', validators=[UniqueValidator(
        queryset=AppUser.objects.all()
    )])

    def create(self, validated_data):
        appUser = AppUser(**{**validated_data})
        appUser.set_password(validated_data['password'])
        appUser.save()
        return appUser

    class Meta:
        model = AppUser
        fields = ('id', 'email', 'password', 'handle', 'description',
                  'profile_img', 'native', 'learning', 'status')
        extra_kwargs = {
            'email': {'write_only': True},
            'password': {'write_only': True}, 
        }


class AppUserProfileSerializer(DynamicFieldsModelSerializer):
    handle = serializers.CharField(source='username')
    connections = AppUserSerializer(read_only=True, many=True)

    class Meta:
        model = AppUser
        fields = ('id', 'email', 'handle', 'description',
                  'profile_img', 'status', 'native', 'learning', 'connections', 'username')
