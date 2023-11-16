import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Viajeros',
        icon: 'pi pi-fw pi-user',
        routerLink: '/viajeros',
        items: [
          {
            label: 'Crear viajeros',
            icon: 'pi pi-plus-circle',
            routerLink: '/crear-viajeros',
          },
          {
            label: 'Mostrar viajeros',
            icon: 'pi pi-users',
            routerLink: '/mostrar-viajeros',
          },
          {
            label: 'Actualizar viajeros',
            icon: 'pi pi pi-eraser',
            routerLink: '/actualizar-viajeros',

          },
          {
            label: 'Eliminar viajeros',
            icon: 'pi pi pi-times-circle',
            routerLink: '/eliminar-viajeros'
          }
        ]
      },
      {
        label: 'Viajes',
        icon: 'pi pi pi-car',
        routerLink: '/viajes',
        items: [
          {
            label: 'Crear viajes',
            icon: 'pi pi-plus-circle',
            routerLink: '/crear-viajes'
          },
          {
            label: 'Mostrar viajes',
            icon: 'pi pi pi-car',
            routerLink: '/mostrar-viajes'
          },
          {
            label: 'Actualizar viajes',
            icon: 'pi pi pi-eraser',
            routerLink: '/actualizar-viajes'
          },
          {
            label: 'Eliminar viajes',
            icon: 'pi pi pi-times-circle',
            routerLink: '/eliminar-viajes'
          }
        ]
      },
      {
        label: 'Origen',
        icon: 'pi pi pi-map-marker',
        routerLink: '/origen',
        items: [
          {
            label: 'Crear origen',
            icon: 'pi pi-plus-circle',
            routerLink: '/crear-origen',
      
          },
          {
            label: 'Mostrar origen',
            icon: 'pi pi-fw pi-home',
            routerLink:'/mostrar-origen'
          },
          {
            label: 'Actualizar origen',
            icon: 'pi pi pi-eraser',
            routerLink: '/actualizar-origen'
          },
          {
            label: 'Eliminar origen',
            icon: 'pi pi pi-times-circle',
            routerLink: '/eliminar-origen'
          }
        ]
      },
      {
        label: 'Destino',
        icon: 'pi pi-globe',
        routerLink: '/origen',
        items: [
          {
            label: 'Crear destino',
            icon: 'pi pi-plus-circle',
            routerLink: '/crear-destino'
          },
          {
            label: 'Mostar destino',
            icon: 'pi pi pi-map-marker',
            routerLink:'/mostrar-destino'
          },
          {
            label: 'Actualizar destino',
            icon: 'pi pi-eraser',
            routerLink: '/actualizar-destino'
          },
          {
            label: 'Eliminar destino',
            icon: 'pi pi pi-times-circle',
            routerLink: '/eliminar-destino'
          }
        ]
      },
      {
        label: 'Referencia familiar',
        icon: 'pi pi-fw pi-users',
        routerLink: '/referenciaFamiliar',
        items: [
          {
            label: 'Crear referencia',
            icon: 'pi pi-plus-circle',
            routerLink: '/crear-referencia-familiar',
          },
          {
            label: 'Mostrar referencia',
            icon: 'pi pi pi-user',
            routerLink: '/mostar-referencia-familiar',
          },
          {
            label:'Actualizar referencia',
            icon:'pi pi-eraser',
            routerLink:'/actualizar-referencia-familiar'
          },
          {
            label:'Eliminar referencia',
            icon:'pi pi pi-times-circle',
            routerLink:'/eliminar-referencia-familiar'
          }
        ]
      }
    ]
  }
}
