from chat.middlewares import TokenAuthMiddleWare
from channels.security.websocket import OriginValidator
from channels.routing import ProtocolTypeRouter, URLRouter
import chat.routing

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': TokenAuthMiddleWare(
    OriginValidator(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
    ["https://app.dubstep-warrior.com"],
    ),
})