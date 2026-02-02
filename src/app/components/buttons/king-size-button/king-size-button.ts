import {Component, input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-king-size-button',
  imports: [],
  templateUrl: './king-size-button.html',
  styleUrl: './king-size-button.css',
})
export class KingSizeButton {

  btnText = input<string>('');
  target = input<string>('');

  constructor(private router: Router) {
  }

  navigateTo() {
    this.router.navigate([this.target()]);
  }

}
