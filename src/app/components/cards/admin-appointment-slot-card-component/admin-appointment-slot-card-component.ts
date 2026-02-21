import {Component, input, output} from '@angular/core';
import {Button} from "primeng/button";
import {DatePipe} from "@angular/common";
import {AppointmentSlot} from '../../../models/appointment-slot.model';
import {IconButtonComponent} from '../../buttons/icon-button-component/icon-button-component';

@Component({
  selector: 'app-admin-appointment-slot-card-component',
  imports: [
    Button,
    DatePipe,
    IconButtonComponent
  ],
  templateUrl: './admin-appointment-slot-card-component.html',
  styleUrl: './admin-appointment-slot-card-component.css',
})
export class AdminAppointmentSlotCardComponent {

  appointmentSlot = input<AppointmentSlot>();

  btnClicked = output<AppointmentSlot>();

  confirmDelete(appointmentSlot: AppointmentSlot | undefined) {
    if (!appointmentSlot) return;
    this.btnClicked.emit(appointmentSlot);
  }


}
