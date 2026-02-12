import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {
  IconTextButtonComponent
} from '../../../../components/buttons/icon-text-button-component/icon-text-button-component';

@Component({
  selector: 'app-analyse-section',
  imports: [
    MatIcon,
    IconTextButtonComponent
  ],
  templateUrl: './analyse-section.html',
  styleUrl: './analyse-section.css',
})
export class AnalyseSection {

}
