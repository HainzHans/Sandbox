import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';

@Component({
  selector: 'app-footer-section',
  imports: [
    MatIcon,
    KingSizeButton
  ],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
})
export class FooterSection {

}
