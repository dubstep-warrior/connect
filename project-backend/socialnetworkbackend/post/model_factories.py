import factory,factory.fuzzy
from .models import Post, Like, Comment
from account.model_factories import UserFactory

class PostFactory(factory.django.DjangoModelFactory):
    user = factory.SubFactory(UserFactory) 
    description = factory.fuzzy.FuzzyText(length=24)
    image = factory.django.FileField(data='data', filename='test__can_delete__mymodel')

    class Meta:
        model = Post 

class LikeFactory(factory.django.DjangoModelFactory):
    post_id = factory.SubFactory(PostFactory) 
    liked_by = factory.SubFactory(UserFactory) 

    class Meta:
        model = Like 

class CommentFactory(factory.django.DjangoModelFactory):
    post_id = factory.SubFactory(PostFactory) 
    commented_by = factory.SubFactory(UserFactory) 
    description = factory.fuzzy.FuzzyText(length=24)

    class Meta:
        model = Comment 
 