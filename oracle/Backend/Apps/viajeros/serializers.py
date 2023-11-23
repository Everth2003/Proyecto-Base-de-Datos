from rest_framework import serializers
from .models import Viajero

class ViajeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viajero
        fields = '__all__'