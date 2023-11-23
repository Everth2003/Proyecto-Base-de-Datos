import { Component, OnInit } from '@angular/core';
import { Origen } from 'src/app/modelos/origen';
import { OrigenService } from 'src/app/servicio3/origen.service';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
@Component({
  selector: 'app-mostrar-origen',
  templateUrl: './mostrar-origen.component.html',
  styleUrls: ['./mostrar-origen.component.css']
})
export class MostrarOrigenComponent implements OnInit {

  
  public origen: Origen[] = []
  public displayedColumns: string[] = ["id", " nombre"]
  constructor(
    private origenService: OrigenService,
    private router: Router,
    private messageService: MessageService
    
  ) { }
  ngOnInit(): void {
    this.mostrarOrigen();
  }

  mostrarOrigen() {
    this.origenService.getAllOrigen()
      .subscribe((origen: Origen[]) => {
        this.origen = origen;
        console.log(this.origen);
      });
  }


}
