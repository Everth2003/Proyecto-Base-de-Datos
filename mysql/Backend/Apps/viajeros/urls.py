from django.urls import path, include
from rest_framework import routers
from .views import ViajeroViewSet

router= routers.DefaultRouter()
router.register(r'',ViajeroViewSet)

urlpatterns =[
    path('', include(router.urls)),
]

