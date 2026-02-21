import {Component, input, output} from '@angular/core';
import {Button, ButtonSeverity} from 'primeng/button';

@Component({
  selector: 'app-icon-button-component',
  imports: [
    Button
  ],
  templateUrl: './icon-button-component.html',
  styleUrl: './icon-button-component.css',
})
export class IconButtonComponent {

  severity = input<ButtonSeverity>('primary');
  icon = input<string>('');

  btnClicked = output<void>();

  clicked() {
    this.btnClicked.emit();
  }

}
