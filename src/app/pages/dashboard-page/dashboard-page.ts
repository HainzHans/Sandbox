import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar-component/toolbar-component';
import {SidebarComponent} from '../../components/sidebar-component/sidebar-component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    ToolbarComponent,
    SidebarComponent
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {

}
