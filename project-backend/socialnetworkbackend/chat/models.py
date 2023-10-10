from django.db import models
from account.models import AppUser

# Create your models here.
class Chat(models.Model): 
    name = models.CharField(max_length=255, blank=True, null=True)
    image = models.FileField(null=True, upload_to="chatroom_images")
    chatroom = models.BooleanField()  
    users = models.ManyToManyField(AppUser)

    def get_users(self):
        return ",".join([str(p) for p in self.users.all()])
 
class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    message = models.TextField(blank=False, null=False)
    date_created = models.DateTimeField(auto_now=True)

 
