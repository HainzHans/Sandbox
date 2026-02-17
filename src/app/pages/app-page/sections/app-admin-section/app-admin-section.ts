import { Component } from '@angular/core';
import {AppTableComponent} from '../../components/app-table-component/app-table-component';
import {
  AppAdminStatisticsComponent
} from '../../components/app-admin-statistics-component/app-admin-statistics-component';

@Component({
  selector: 'app-app-admin-section',
  imports: [
    AppTableComponent,
    AppAdminStatisticsComponent
  ],
  templateUrl: './app-admin-section.html',
  styleUrl: './app-admin-section.css',
})
export class AppAdminSection {

}
