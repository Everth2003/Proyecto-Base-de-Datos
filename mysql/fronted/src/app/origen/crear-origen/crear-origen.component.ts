import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Origen } from 'src/app/modelos/origen';
import { OrigenService } from 'src/app/servicio3/origen.service';
import { Router } from '@angular/router';
import {Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crear-origen',
  templateUrl: './crear-origen.component.html',
  styleUrls: ['./crear-origen.component.css']
})
export class CrearOrigenComponent implements OnInit{

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
  
  });
  ngOnInit(): void {

  }

  constructor(
    private formBuilder: FormBuilder,
    private origenService: OrigenService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  
  onSubmit(): void {
    const formValue: Origen = this.form.value;
    console.log(formValue);
    this.origenService.createOrigen(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({severity:'success', summary: 'Succes', detail: 'Origen Creado', life:5000});


        }, 0);
         this.router.navigateByUrl('origen');

      },
      err => {

        console.log(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Origen no creado', life:5000});
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/origen');
  }
  get nombre() { return this.form.get(' nombre'); }


}
