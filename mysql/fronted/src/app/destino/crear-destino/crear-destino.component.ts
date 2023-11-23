import { Component , OnInit} from '@angular/core';
import { Destino } from 'src/app/modelos/destino';
import { DestinoService } from 'src/app/servicio4/destino.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Message, MessageService } from 'primeng/api';
@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit{

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
  
  });

    constructor(
    private formBuilder: FormBuilder,
    private destinoService: DestinoService,
    private messageService: MessageService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  
  }

  onSubmit(): void {
    const formValue: Destino = this.form.value;
    console.log(formValue);
    this.destinoService.createDestino(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({severity:'success', summary: 'Succes', detail: 'Destino Creado', life:5000});


        }, 0);
         this.router.navigateByUrl('destino');

      },
      err => {

        console.log(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Origen no creado', life:5000});
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/destino');
  }
  get nombre() { return this.form.get(' nombre'); }

}
