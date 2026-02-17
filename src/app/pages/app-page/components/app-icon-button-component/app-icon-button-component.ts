import {Component, input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-app-icon-button-component',
    imports: [
        MatIcon,
        MatIconButton
    ],
  templateUrl: './app-icon-button-component.html',
  styleUrl: './app-icon-button-component.css',
})
export class AppIconButtonComponent {

  icon = input<string>('');

}
