import {Component, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-rounded-borders-button',
  imports: [
    MatIcon
  ],
  templateUrl: './rounded-borders-button.html',
  styleUrl: './rounded-borders-button.css',
})
export class RoundedBordersButton {

  icon = input<string>('');

  btnText = input<string>('');

}
