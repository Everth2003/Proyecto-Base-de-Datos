from django.urls import path, include
from rest_framework import routers
from .views import ReferenciaFamiliareViewSet

router= routers.DefaultRouter()
router.register(r'',ReferenciaFamiliareViewSet)

urlpatterns =[

    path('', include(router.urls)),
]

