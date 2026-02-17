import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {IconButtonComponent} from '../../buttons/icon-button-component/icon-button-component';
import {MatIcon} from '@angular/material/icon';
import {HeaderNavButtonComponent} from '../../buttons/header-nav-button-component/header-nav-button-component';

@Component({
  selector: 'app-overview-header-component',
  imports: [
    IconButtonComponent,
    MatIcon,
    HeaderNavButtonComponent
  ],
  templateUrl: './overview-header-component.html',
  styleUrl: './overview-header-component.css',
})
export class OverviewHeaderComponent {

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/king-size'])
  }



}
