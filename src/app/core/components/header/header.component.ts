import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Agregar Paciente',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/home',
      },
    ];
  }
}
