import { Component, OnInit } from '@angular/core';
import { Viajero } from 'src/app/modelos/viajeros';
import { ViajerosService } from 'src/app/servicio1/viajeros.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-eliminar-viajeros',
  templateUrl: './eliminar-viajeros.component.html',
  styleUrls: ['./eliminar-viajeros.component.css']
})
export class EliminarViajerosComponent  implements OnInit {
  public viajero: Viajero[] = []
  public displayedColumns: string[] = ["id", " nombre", "direccion", " telefono"]
  constructor(
    private viajeroService: ViajerosService,
    private router: Router,
    private messageService: MessageService
    
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
  eliminar(id: number): void{
    this.router.navigateByUrl('/viajeros');
    this.viajeroService.deleteViajero(id).subscribe(
      () => {
        this.messageService.add({severity:'success', summary: 'Notificación', detail: 'Viajero eliminado', life:5000});
        this.mostrarViajero();
      },
      err => {
        console.log('error')
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar el viajero', life: 5000 });
        this.router.navigateByUrl('/viajeros');
      }
    );
  }

  imprimir(id: number){

  }

}
