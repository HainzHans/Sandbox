import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {IconButtonComponent} from '../../buttons/icon-button-component/icon-button-component';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-overview-header-component',
  imports: [
    IconButtonComponent,
    MatIcon
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
