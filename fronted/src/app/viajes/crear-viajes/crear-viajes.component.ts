import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Viaje } from 'src/app/modelos/viajes';
import { ViajesService } from 'src/app/servicio2/viajes.service';
import { Router } from '@angular/router';
import {Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-viajes',
  templateUrl: './crear-viajes.component.html',
  styleUrls: ['./crear-viajes.component.css']
})
export class CrearViajesComponent implements OnInit {
  
  public form: FormGroup = this.formBuilder.group({
    numeroAsiento: ['', [Validators.required]],
    fechaViaje: ['', [Validators.required]],
    
  
  });
  ngOnInit(): void {
   
  }
  constructor(
    private formBuilder: FormBuilder,
    private viajeService: ViajesService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  onSubmit(): void {
    const formValue: Viaje = this.form.value;
    console.log(formValue);
    this.viajeService.createViaje(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({severity:'success', summary: 'Succes', detail: 'Viaje Creado', life:5000});


        }, 0);
         this.router.navigateByUrl('viajes');

      },
      err => {

        console.log(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Viaje no creado', life:5000});
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/viajes');
  }
  get numeroAsiento() { return this.form.get(' numeroAsiento'); }
  get fechaViaje() { return this.form.get('fechaViaje'); }


}
