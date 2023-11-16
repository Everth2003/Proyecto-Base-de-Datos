import { Component, OnInit } from '@angular/core';
import { ViajerosService } from 'src/app/servicio1/viajeros.service';
import { Viajero } from 'src/app/modelos/viajeros';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mostrar-viajeros',
  templateUrl: './mostrar-viajeros.component.html',
  styleUrls: ['./mostrar-viajeros.component.css']
})
export class MostrarViajerosComponent implements OnInit {


  public viajero: Viajero[] = []
  public displayedColumns: string[] = ["id", " nombre", "direccion", " telefono"]
  constructor(
    private viajeroService: ViajerosService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.mostrarViajero();
  }

  mostrarViajero() {
    this.viajeroService.getAllViajero()
      .subscribe((viajero: Viajero[]) => {
        this.viajero = viajero;
        console.log(this.viajero);
      });
  }

  
}

