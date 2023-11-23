from django.urls import path, include
from rest_framework import routers
from .views import ViajeViewSet

router= routers.DefaultRouter()
router.register(r'',ViajeViewSet)

urlpatterns =[

    path('', include(router.urls)),
]

