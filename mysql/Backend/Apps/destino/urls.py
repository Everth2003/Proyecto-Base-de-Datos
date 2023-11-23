from django.urls import path, include
from rest_framework import routers
from .views import DestinoViewSet

router= routers.DefaultRouter()
router.register(r'',DestinoViewSet)

urlpatterns =[

    path('', include(router.urls)),
]
