import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {AppIconButtonComponent} from '../app-icon-button-component/app-icon-button-component';

@Component({
  selector: 'app-app-user-task-component',
  imports: [
    MatIcon,
    AppIconButtonComponent
  ],
  templateUrl: './app-user-task-component.html',
  styleUrl: './app-user-task-component.css',
})
export class AppUserTaskComponent {

}
