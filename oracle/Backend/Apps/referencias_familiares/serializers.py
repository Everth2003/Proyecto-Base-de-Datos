from rest_framework import serializers
from .models import Referencia_Familiare

class RefereciaFamiliareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Referencia_Familiare
        fields = '__all__'