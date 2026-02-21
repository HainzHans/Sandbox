import { Component } from '@angular/core';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';
import {KingSizeLogoComponent} from '../../../components/king-size-logo-component/king-size-logo-component';
import {SmallDotComponent} from '../../../components/small-dot-component/small-dot-component';

@Component({
  selector: 'app-footer-section',
  imports: [
    KingSizeButton,
    KingSizeLogoComponent,
    SmallDotComponent
  ],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
})
export class FooterSection {

}
