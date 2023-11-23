from django.urls import path, include
from rest_framework import routers
from .views import OrigenViewSet

router= routers.DefaultRouter()
router.register(r'',OrigenViewSet)

urlpatterns =[

    path('', include(router.urls)),
]
