from django.db import models
from Apps.viajeros.models import  Viajero
from Apps.viajes.models import  Viaje

class Referencia_Familiare(models.Model):
    nombre=models.CharField(max_length=45)
    apellid=models.CharField(max_length=45)
    direccion=models.CharField(max_length=45)
    telefono=models.CharField(max_length=45)
    viajeros=models.ForeignKey(Viajero, on_delete=models.CASCADE)
    viajes=models.ForeignKey(Viaje, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.nombre

    class Meta:
        db_table ='referencias_familiares'