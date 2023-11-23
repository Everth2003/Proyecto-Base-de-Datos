from rest_framework import viewsets
from .models import Referencia_Familiare
from .serializers import RefereciaFamiliareSerializer

class ReferenciaFamiliareViewSet(viewsets.ModelViewSet):
    queryset = Referencia_Familiare.objects.all()
    serializer_class = RefereciaFamiliareSerializer