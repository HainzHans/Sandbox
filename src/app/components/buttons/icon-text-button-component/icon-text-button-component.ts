import {Component, input, output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-icon-text-button-component',
    imports: [
        MatIcon
    ],
  templateUrl: './icon-text-button-component.html',
  styleUrl: './icon-text-button-component.css',
})
export class IconTextButtonComponent {

  btnText = input<string>('');
  btnIcon = input<string>('');
  btnActive = input<boolean>(false);

  onBtnClicked = output<void>();

  onClick() {
    this.onBtnClicked.emit()
  }
}
