import { Component , OnInit} from '@angular/core';
import { Destino } from 'src/app/modelos/destino';
import { DestinoService } from 'src/app/servicio4/destino.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-mostrar-destino',
  templateUrl: './mostrar-destino.component.html',
  styleUrls: ['./mostrar-destino.component.css']
})
export class MostrarDestinoComponent implements OnInit {



  public destino: Destino[] = []
  public displayedColumns: string[] = ["id", " nombre"]
  constructor(
    private destinoService: DestinoService,
    private router: Router,
    private messageService: MessageService
    
  ) { }
  ngOnInit(): void {
   this.mostrarDestino();
  }
  
  mostrarDestino() {
    this.destinoService.getAllDestino()
      .subscribe((destino: Destino[]) => {
        this.destino = destino;
        console.log(this.destino);
      });
  }
}
