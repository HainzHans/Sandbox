import { Component } from '@angular/core';
import {KingSizeButton} from "../../../../components/buttons/king-size-button/king-size-button";
import {MatIcon} from "@angular/material/icon";
import {StandardInput} from "../../../../components/input/standard-input/standard-input";
import {Router} from '@angular/router';
import {IconButtonComponent} from '../../../../components/buttons/icon-button-component/icon-button-component';

@Component({
  selector: 'app-king-size-header-section',
  imports: [
    KingSizeButton,
    MatIcon,
    StandardInput,
    IconButtonComponent
  ],
  templateUrl: './king-size-header-section.html',
  styleUrl: './king-size-header-section.css',
})
export class KingSizeHeaderSection {

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/king-size'])
  }

}
