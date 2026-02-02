import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {StandardInput} from '../../../../components/input/standard-input/standard-input';
import {KingSizeButton} from '../../../../components/buttons/king-size-button/king-size-button';

@Component({
  selector: 'app-searchbar-header-section',
  imports: [
    MatIcon,
    StandardInput,
    KingSizeButton
  ],
  templateUrl: './searchbar-header-section.html',
  styleUrl: './searchbar-header-section.css',
})
export class SearchbarHeaderSection {

}
