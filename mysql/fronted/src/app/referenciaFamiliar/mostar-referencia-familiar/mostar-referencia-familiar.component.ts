import { Component, OnInit } from '@angular/core';
import { ReferenciaFamiliarService } from 'src/app/servicio5/referencia-familiar.service';
import { referenciaFamiliar } from 'src/app/modelos/referencia-familiares';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mostar-referencia-familiar',
  templateUrl: './mostar-referencia-familiar.component.html',
  styleUrls: ['./mostar-referencia-familiar.component.css']
})
export class MostarReferenciaFamiliarComponent implements OnInit {
  public familiar: referenciaFamiliar[] = []
  public displayedColumns: string[] = ["id", " nombre", "apellid", "direccion"]
  constructor(
    private familiarService: ReferenciaFamiliarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mostrarFamiliar();
  }

  mostrarFamiliar() {
    this.familiarService.getAllReferencia()
      .subscribe((familiar: referenciaFamiliar[]) => {
        this.familiar = familiar;
        console.log(this.familiar);
      });
    }
}

