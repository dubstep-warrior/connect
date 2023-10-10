from django.db import models
from django.contrib.auth.models import User, AbstractUser

# Create your models here.

class AppUser(AbstractUser): 
    email = models.EmailField(unique=True) 
    description = models.TextField(null=True, blank=True)
    profile_img = models.FileField(upload_to='profile_images', null=True, blank=True)
    native = models.CharField(max_length=3)
    learning = models.CharField(max_length=3)
    status = models.CharField(max_length=255,null= True, blank=True)
    connections = models.ManyToManyField("self", blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    def __unicode__(self):
        return self.pk 
 
 