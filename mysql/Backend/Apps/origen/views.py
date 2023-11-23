from rest_framework import viewsets
from .models import Origen
from .serializers import OrigenSerializer

class OrigenViewSet(viewsets.ModelViewSet):
    queryset = Origen.objects.all()
    serializer_class = OrigenSerializer