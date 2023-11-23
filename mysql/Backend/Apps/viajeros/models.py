from django.db import models


class Viajero(models.Model):
    nombre = models.CharField(max_length=45)
    direccion = models.CharField(max_length=45)
    telefono = models.CharField(max_length=45)

    def __str__(self) -> str:
        return self.nombre

    class Meta:
        db_table = 'viajeros'
