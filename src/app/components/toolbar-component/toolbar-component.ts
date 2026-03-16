import { Component } from '@angular/core';
import {Toolbar} from 'primeng/toolbar';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Avatar} from 'primeng/avatar';
import {KingSizeButton} from '../buttons/king-size-button/king-size-button';
import {ActionButtonComponent} from '../buttons/action-button-component/action-button-component';

@Component({
  selector: 'app-toolbar-component',
  imports: [
    Toolbar,
    Menubar,
    Avatar,
    KingSizeButton,
    ActionButtonComponent
  ],
  templateUrl: './toolbar-component.html',
  styleUrl: './toolbar-component.css',
})
export class ToolbarComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Mein Bereich',
      icon: 'pi pi-fw pi-clipboard',
    },
    {
      label: 'Aufgaben',
      icon: 'pi pi-fw pi-list',
      badge: '1',
    },
    {
      label: 'Livetrading',
      icon: 'pi pi-fw pi-chart-bar',
    },
  ]

  adminMenuItems: MenuItem[] = [
    {
      label: 'Admin',
      icon: 'pi pi-fw pi-shield',
    },

  ]

}
