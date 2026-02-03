import { Component } from '@angular/core';
import {MatCalendar} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {
  KingSizeCalendarComponent
} from '../../../../components/calendar/king-size-calendar-component/king-size-calendar-component';
import {StandardInput} from '../../../../components/input/standard-input/standard-input';

@Component({
  selector: 'app-appointment-form-section',
  imports: [
    MatCalendar,
    KingSizeCalendarComponent,
    StandardInput
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './appointment-form-section.html',
  styleUrl: './appointment-form-section.css',
})
export class AppointmentFormSection {

}
