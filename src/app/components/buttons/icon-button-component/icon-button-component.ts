import {Component, input, output} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-icon-button-component',
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './icon-button-component.html',
  styleUrl: './icon-button-component.css',
})
export class IconButtonComponent {

  icon = input<string>('');
  target = input<string>('');

  constructor(private router: Router) {
  }

  navigateTo() {
    this.router.navigate([this.target()]);
  }

}
