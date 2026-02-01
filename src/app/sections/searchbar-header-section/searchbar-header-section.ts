import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {StandardInput} from '../../components/input/standard-input/standard-input';
import {RoundedBordersButton} from '../../components/buttons/rounded-borders-button/rounded-borders-button';

@Component({
  selector: 'app-searchbar-header-section',
  imports: [
    MatIcon,
    StandardInput,
    RoundedBordersButton
  ],
  templateUrl: './searchbar-header-section.html',
  styleUrl: './searchbar-header-section.css',
})
export class SearchbarHeaderSection {

}
