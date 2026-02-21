import {Component, Input} from '@angular/core';
import {BookedAppointment} from '../../models/frontend/booked-appointment.model';
import {TableModule} from 'primeng/table';
import {SmallChipComponent} from '../chips/small-chip-component/small-chip-component';
import {ChipStatus} from '../../models/types/chip-status.type';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-table-component',
  imports: [
    TableModule,
    SmallChipComponent,
    DatePipe
  ],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
})
export class TableComponent {

  @Input() bookedAppointments: BookedAppointment[] = [];

  getStatus(row: BookedAppointment): ChipStatus {
    if (!row.appointmentSlot) return '';

    const date = row.appointmentSlot.date;
    const time = row.appointmentSlot.time;

    const appointmentDateTime = new Date(`${date}T${time}`);
    const now = new Date();

    return appointmentDateTime > now ? 'Offen' : 'Abgeschlossen';
  }

}

