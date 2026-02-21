import {Component, output} from '@angular/core';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-action-button-component',
  imports: [
    Button
  ],
  templateUrl: './action-button-component.html',
  styleUrl: './action-button-component.css',
})
export class ActionButtonComponent {

  btnClicked = output<void>();

  clicked() {
    this.btnClicked.emit();
  }

}
