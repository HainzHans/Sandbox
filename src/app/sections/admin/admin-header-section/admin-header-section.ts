import {Component, output} from '@angular/core';
import {Toolbar} from 'primeng/toolbar';
import {Button} from 'primeng/button';
import {AdminPage} from '../../../pages/admin-page/admin-page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header-section',
  imports: [
    Toolbar,
    Button
  ],
  templateUrl: './admin-header-section.html',
  styleUrl: './admin-header-section.css',
})
export class AdminHeaderSection {

  openDrawer = output<void>();

  constructor(private router: Router) {
  }

  openSettings() {
    this.openDrawer.emit();
  }

  navigateHome() {
    this.router.navigate([''])
  }

}
