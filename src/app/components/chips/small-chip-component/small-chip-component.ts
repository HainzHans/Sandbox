import {Component, input} from '@angular/core';
import {ChipStatus} from '../../../models/types/chip-status.type';
import {Chip} from 'primeng/chip';

@Component({
  selector: 'app-small-chip-component',
  imports: [
    Chip
  ],
  templateUrl: './small-chip-component.html',
  styleUrl: './small-chip-component.css',
})
export class SmallChipComponent {

  status = input<ChipStatus>('Abgeschlossen');

}

