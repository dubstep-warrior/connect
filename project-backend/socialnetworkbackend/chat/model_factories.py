import factory,factory.fuzzy
from .models import Chat, Message
from account.model_factories import UserFactory

class ChatFactory(factory.django.DjangoModelFactory):
    name = 'chat' 
    chatroom = True 

    @factory.post_generation
    def users(self, create, extracted, **kwargs):
        if not create: 
            return

        if extracted: 
            for user in extracted:
                self.users.add(user)

    class Meta:
        model = Chat 

class MessageFactory(factory.django.DjangoModelFactory):
    chat = factory.SubFactory(ChatFactory) 
    user = factory.SubFactory(UserFactory) 
    message = factory.fuzzy.FuzzyText(length=24)
    
    class Meta:
        model = Message 