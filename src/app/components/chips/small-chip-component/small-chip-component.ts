import {Component, input} from '@angular/core';
import {ChipStatus} from '../../../models/types/chip-status.type';

@Component({
  selector: 'app-small-chip-component',
  imports: [],
  templateUrl: './small-chip-component.html',
  styleUrl: './small-chip-component.css',
})
export class SmallChipComponent {

  status = input<ChipStatus>('Abgeschlossen');

}

