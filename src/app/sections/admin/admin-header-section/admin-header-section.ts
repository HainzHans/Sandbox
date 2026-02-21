import {Component, output} from '@angular/core';
import {Toolbar} from 'primeng/toolbar';
import {
  IconButtonComponent
} from '../../../components/buttons/icon-button-component/icon-button-component';
import {KingSizeLogoComponent} from '../../../components/king-size-logo-component/king-size-logo-component';

@Component({
  selector: 'app-admin-header-section',
  imports: [
    Toolbar,
    IconButtonComponent,
    KingSizeLogoComponent
  ],
  templateUrl: './admin-header-section.html',
  styleUrl: './admin-header-section.css',
})
export class AdminHeaderSection {

  openDrawer = output<void>();

  openSettings() {
    this.openDrawer.emit();
  }

}
