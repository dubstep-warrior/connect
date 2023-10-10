import factory,factory.fuzzy
from .models import ConnectionRequest
from account.model_factories import UserFactory

class ConnectionFactory(factory.django.DjangoModelFactory):
    request_from = factory.SubFactory(UserFactory) 
    request_to = factory.SubFactory(UserFactory) 

    class Meta:
        model = ConnectionRequest 
 