import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {StandardInput} from '../../components/input/standard-input/standard-input';
import {RoundedBordersButton} from '../../components/buttons/rounded-borders-button/rounded-borders-button';

@Component({
  selector: 'app-header-section',
  imports: [
    MatIcon,
    StandardInput,
    RoundedBordersButton
  ],
  templateUrl: './header-section.html',
  styleUrl: './header-section.css',
})
export class HeaderSection {


}
