from rest_framework import viewsets
from .models import Viajero
from .serializers import ViajeroSerializer

class ViajeroViewSet(viewsets.ModelViewSet):
    queryset = Viajero.objects.all()
    serializer_class = ViajeroSerializer