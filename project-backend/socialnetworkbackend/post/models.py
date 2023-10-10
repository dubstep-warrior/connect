from django.db import models
from account.models import AppUser

# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    description = models.TextField(blank=False, null=False)
    image = models.FileField(null=True, upload_to="post_images")
    date_created = models.DateTimeField(auto_now=True)

class Like(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    liked_by = models.ForeignKey(AppUser, on_delete=models.DO_NOTHING)
    date_liked = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = (('post_id', 'liked_by'),) 
    
class Comment(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    commented_by = models.ForeignKey(AppUser, on_delete=models.DO_NOTHING)
    description = models.TextField(blank=False, null=False)
    date_commented = models.DateTimeField(auto_now=True)