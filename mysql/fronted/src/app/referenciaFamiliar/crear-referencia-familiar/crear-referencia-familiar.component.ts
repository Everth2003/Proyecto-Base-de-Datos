import { Component , OnInit} from '@angular/core';
import { referenciaFamiliar } from 'src/app/modelos/referencia-familiares';
import { ReferenciaFamiliarService } from 'src/app/servicio5/referencia-familiar.service';
import { Router } from '@angular/router';
import {Message, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-referencia-familiar',
  templateUrl: './crear-referencia-familiar.component.html',
  styleUrls: ['./crear-referencia-familiar.component.css']
})
export class CrearReferenciaFamiliarComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellid: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    

  });
  ngOnInit(): void {
  
  }
  constructor(
    private formBuilder: FormBuilder,
    private referenciaService: ReferenciaFamiliarService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  onSubmit(): void {
    const formValue: referenciaFamiliar = this.form.value;
    console.log(formValue);
    this.referenciaService.createReferencia(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        setTimeout(() => {

          this.messageService.add({severity:'success', summary: 'Succes', detail: 'Referencia familiar creado', life:5000});


        }, 0);
         this.router.navigateByUrl('referenciaFamiliar');

      },
      err => {

        console.log(err);
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Referencia familiar no creado', life:5000});
      }
    );
  }

  
  cancel() {
    this.router.navigateByUrl('/referenciaFamiliar');
  }
  get nombre() { return this.form.get('nombre'); }
  get apellid() { return this.form.get('apellido'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
  
}
