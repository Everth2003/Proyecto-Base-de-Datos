import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Viajero } from 'src/app/modelos/viajeros';
import { ViajerosService } from 'src/app/servicio1/viajeros.service';
import { Router } from '@angular/router';
import {Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-viajeros',
  templateUrl: './crear-viajeros.component.html',
  styleUrls: ['./crear-viajeros.component.css']
})
export class CrearViajerosComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    

  });
  ngOnInit(): void {
    
  }

  constructor(
    private formBuilder: FormBuilder,
    private viajeroService: ViajerosService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  onSubmit(): void {
    const formValue: Viajero = this.form.value;
    console.log(formValue);
    this.viajeroService.createCliente(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({severity:'success', summary: 'Succes', detail: 'Viajero creado ', life:5000});


        }, 0);
         this.router.navigateByUrl('viajeros');

      },
      err => {

        console.log(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Viajero no creado', life:4000});
      }
    );
  }


  cancel() {
    this.router.navigateByUrl('/viajeros');
  }
  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  
}
