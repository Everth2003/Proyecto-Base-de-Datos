import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PanelMenuModule } from 'primeng/panelmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { HeaderComponent } from './componentes/layout/header/header.component';
import { ContentComponent } from './componentes/layout/content/content.component';
import { FooterComponent } from './componentes/layout/footer/footer.component';
import { AsideComponent } from './componentes/aside/aside.component';

import { CrearViajerosComponent } from './viajeros/crear-viajeros/crear-viajeros.component';
import { MostrarViajerosComponent } from './viajeros/mostrar-viajeros/mostrar-viajeros.component';
import { ActualizarViajerosComponent } from './viajeros/actualizar-viajeros/actualizar-viajeros.component';
import { EliminarViajerosComponent } from './viajeros/eliminar-viajeros/eliminar-viajeros.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { CrearViajesComponent } from './viajes/crear-viajes/crear-viajes.component';
import { MostrarViajesComponent } from './viajes/mostrar-viajes/mostrar-viajes.component';
import { ActualizarViajesComponent } from './viajes/actualizar-viajes/actualizar-viajes.component';
import { EliminarViajesComponent } from './viajes/eliminar-viajes/eliminar-viajes.component';

import { CrearOrigenComponent } from './origen/crear-origen/crear-origen.component';
import { MostrarOrigenComponent } from './origen/mostrar-origen/mostrar-origen.component';
import { ActualizarOrigenComponent } from './origen/actualizar-origen/actualizar-origen.component';
import { EliminarOrigenComponent } from './origen/eliminar-origen/eliminar-origen.component';

import { CrearDestinoComponent } from './destino/crear-destino/crear-destino.component';
import { MostrarDestinoComponent } from './destino/mostrar-destino/mostrar-destino.component';
import { ActualizarDestinoComponent } from './destino/actualizar-destino/actualizar-destino.component';
import { EliminarDestinoComponent } from './destino/eliminar-destino/eliminar-destino.component';

import { CrearReferenciaFamiliarComponent } from './referenciaFamiliar/crear-referencia-familiar/crear-referencia-familiar.component';
import { MostarReferenciaFamiliarComponent } from './referenciaFamiliar/mostar-referencia-familiar/mostar-referencia-familiar.component';
import { ActualizarReferenciaFamiliarComponent } from './referenciaFamiliar/actualizar-referencia-familiar/actualizar-referencia-familiar.component';
import { EliminarReferenciaFamiliarComponent } from './referenciaFamiliar/eliminar-referencia-familiar/eliminar-referencia-familiar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    CrearViajerosComponent,
    MostrarViajerosComponent,
    ActualizarViajerosComponent,
    EliminarViajerosComponent,
    CrearViajesComponent,
    MostrarViajesComponent,
    ActualizarViajesComponent,
    EliminarViajesComponent,
    CrearOrigenComponent,
    MostrarOrigenComponent,
    ActualizarOrigenComponent,
    EliminarOrigenComponent,
    CrearDestinoComponent,
    MostrarDestinoComponent,
    ActualizarDestinoComponent,
    EliminarDestinoComponent,
    MostarReferenciaFamiliarComponent,
    ActualizarReferenciaFamiliarComponent,
    EliminarReferenciaFamiliarComponent,
    CrearReferenciaFamiliarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ToastModule,
   
   

  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
