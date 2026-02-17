import {Component, input, output} from '@angular/core';
import {AppSection} from '../../models/app-section.model';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-app-side-nav-button-component',
  imports: [
    MatIcon
  ],
  templateUrl: './app-side-nav-button-component.html',
  styleUrl: './app-side-nav-button-component.css',
})
export class AppSideNavButtonComponent {

  appSection = input<AppSection>();
  onBtnClicked = output<void>();


  btnClicked() {
    this.onBtnClicked.emit()
  }

}
