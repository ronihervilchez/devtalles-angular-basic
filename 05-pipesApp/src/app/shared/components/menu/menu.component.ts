import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/pipes/textos',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/pipes/numeros',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/pipes/no-comunes',
          },
        ],
      },
      {
        label: 'Personalizados',
        icon: 'pi pi-cog',
        routerLink: '/pipes/personalizados',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
            routerLink: '/pipes/personalizados/otro-elemento',
          },
        ],
      },
    ];
  }
}
