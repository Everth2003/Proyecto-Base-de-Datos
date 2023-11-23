from django.db import models
from Apps.viajeros.models import Viajero
class Viaje(models.Model):
    numeroAsiento=models.CharField(max_length=45)
    fechaViaje=models.DateField(auto_now_add=False)
    viajero=models.ForeignKey(Viajero, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.numeroAsiento

    class Meta:
        db_table ='viajes'