import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearViajerosComponent } from './viajeros/crear-viajeros/crear-viajeros.component';
import { MostrarViajerosComponent } from './viajeros/mostrar-viajeros/mostrar-viajeros.component';
import { EliminarViajerosComponent } from './viajeros/eliminar-viajeros/eliminar-viajeros.component';
import { ActualizarViajerosComponent } from './viajeros/actualizar-viajeros/actualizar-viajeros.component';

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

const routes: Routes = [

  {path: 'crear-viajeros', component: CrearViajerosComponent},
  {path: 'mostrar-viajeros', component:MostrarViajerosComponent},
  {path: 'actualizar-viajeros', component:ActualizarViajerosComponent},
  {path: 'eliminar-viajeros', component:EliminarViajerosComponent},
  
  {path :'crear-viajes', component:CrearViajesComponent},
  {path: 'mostrar-viajes', component:MostrarViajesComponent},
  {path: 'actualizar-viajes', component:ActualizarViajesComponent},
  {path: 'eliminar-viajes', component:EliminarViajesComponent},

  {path: 'crear-origen', component:CrearOrigenComponent},
  {path: 'mostrar-origen', component:MostrarOrigenComponent},
  {path: 'actualizar-origen', component:ActualizarOrigenComponent},
  {path: 'eliminar-origen', component:EliminarOrigenComponent},

  {path: 'crear-destino', component:CrearDestinoComponent},
  {path: 'mostrar-destino',component:MostrarDestinoComponent},
  {path: 'actualizar-destino', component:ActualizarDestinoComponent},
  {path: 'eliminar-destino', component:EliminarDestinoComponent},

  {path: 'crear-referencia-familiar', component:CrearReferenciaFamiliarComponent},
  {path: 'mostar-referencia-familiar', component:MostarReferenciaFamiliarComponent},
  {path: 'actualizar-referencia-familiar', component:ActualizarReferenciaFamiliarComponent},
  {path: 'eliminar-referencia-familiar', component:EliminarReferenciaFamiliarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
