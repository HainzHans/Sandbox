import {Component, OnInit} from '@angular/core';
import {AppUserTaskComponent} from '../../components/app-user-task-component/app-user-task-component';

@Component({
  selector: 'app-app-home-section',
  imports: [
    AppUserTaskComponent,
  ],
  templateUrl: './app-home-section.html',
  styleUrl: './app-home-section.css',
})
export class AppHomeSection {


}
