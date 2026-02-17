import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-header-nav-button-component',
  imports: [],
  templateUrl: './header-nav-button-component.html',
  styleUrl: './header-nav-button-component.css',
})
export class HeaderNavButtonComponent {

  interfaceSection = input<any>();
  onNavBtnClicked = output<void>();

  navBtnClicked() {
    this.onNavBtnClicked.emit();
  }

}
