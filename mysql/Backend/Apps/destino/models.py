from django.db import models
from Apps.viajes.models import Viaje

class Destino(models.Model):
    nombre = models.CharField(max_length=45)
    viaje=models.OneToOneField(Viaje, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombre
    
    class Meta:
        db_table ='destinos'
    