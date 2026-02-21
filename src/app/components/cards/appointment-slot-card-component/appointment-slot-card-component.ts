import {Component, effect, input, output} from '@angular/core';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {AppointmentSlot} from '../../../models/appointment-slot.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-appointment-slot-card-component',
  imports: [
    Checkbox,
    FormsModule,
    DatePipe
  ],
  templateUrl: './appointment-slot-card-component.html',
  styleUrl: './appointment-slot-card-component.css',
})
export class AppointmentSlotCardComponent {

  appointmentSlot = input<AppointmentSlot>();
  isSelected = input<boolean>(false);

  onSelect = output<AppointmentSlot>();

  selectAppointmentSlot() {
    this.onSelect.emit(<AppointmentSlot>this.appointmentSlot());
  }

}
