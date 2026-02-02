import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RoundedBordersButton} from '../../components/buttons/rounded-borders-button/rounded-borders-button';

@Component({
  selector: 'app-footer-section',
  imports: [
    MatIcon,
    RoundedBordersButton
  ],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
})
export class FooterSection {

}
