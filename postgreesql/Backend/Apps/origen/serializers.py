from rest_framework import serializers
from .models import Origen

class OrigenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Origen
        fields = '__all__'