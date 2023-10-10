from chat.middlewares import TokenAuthMiddleWare
from channels.security.websocket import AllowedHostsOriginValidator
from channels.routing import ProtocolTypeRouter, URLRouter
import chat.routing

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': TokenAuthMiddleWare(
    AllowedHostsOriginValidator(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    )
    ),
})