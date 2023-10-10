from django.db import models
from account.models import AppUser
# Create your models here. 
class ConnectionRequest(models.Model):
    request_from = models.ForeignKey(AppUser, related_name='request_from', on_delete=models.CASCADE)
    request_to = models.ForeignKey(AppUser, related_name='request_to', on_delete=models.CASCADE)

    class Meta:
        unique_together = (('request_from', 'request_to'),)