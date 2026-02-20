import {Component, effect, input, output} from '@angular/core';
import {Checkbox} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {AppointmentSlot} from '../../models/appointment-slot.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-appointment-card-component',
  imports: [
    Checkbox,
    FormsModule,
    DatePipe
  ],
  templateUrl: './appointment-card-component.html',
  styleUrl: './appointment-card-component.css',
})
export class AppointmentCardComponent {

  appointment = input<AppointmentSlot>();
  isSelected = input<boolean>(true);

  onSelect = output<AppointmentSlot>();

  selectAppointment() {
    this.onSelect.emit(<AppointmentSlot>this.appointment());
  }

}
