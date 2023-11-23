import { Component , OnInit} from '@angular/core';
import { Viaje } from 'src/app/modelos/viajes';
import { ViajesService } from 'src/app/servicio2/viajes.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-viajes',
  templateUrl: './mostrar-viajes.component.html',
  styleUrls: ['./mostrar-viajes.component.css']
})
export class MostrarViajesComponent implements OnInit {

  public viaje: Viaje[] = []
  public displayedColumns: string[] = ["id", " numeroAsiento", " fechaViaje"]
  constructor(
    private viajeService: ViajesService,
    private router: Router,
    private messageService: MessageService
    
  ) { }
  ngOnInit(): void {
    this.mostrarViaje();
  }
  mostrarViaje() {
    this.viajeService.getAllViaje()
      .subscribe((viaje: Viaje[]) => {
        this.viaje = viaje;
        console.log(this.viaje);
      });
  }

}
