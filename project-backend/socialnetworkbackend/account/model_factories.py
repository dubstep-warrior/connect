import factory,factory.fuzzy
from .models import AppUser

class UserFactory(factory.django.DjangoModelFactory):
    email = factory.Sequence(lambda n: 'person{}@gmail.com'.format(n))
    description = 'Hello, my name is admin'
    native = 'en'
    learning = 'jp'
    username = factory.Sequence(lambda n: "name {}".format(n)) 
    status = 'Busy'
    password = factory.PostGenerationMethodCall('set_password', 'adm1n')

    class Meta:
        model = AppUser 