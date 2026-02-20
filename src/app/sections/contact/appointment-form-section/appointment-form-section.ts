import { Component } from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {PrimeTemplate} from 'primeng/api';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {DatePicker} from 'primeng/datepicker';
import {DatePipe} from '@angular/common';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';

@Component({
  selector: 'app-appointment-form-section',
  imports: [
    Stepper,
    StepList,
    Step,
    PrimeTemplate,
    StepPanels,
    Button,
    StepPanel,
    InputText,
    FormsModule,
    DatePicker,
    DatePipe,
    KingSizeButton
  ],
  templateUrl: './appointment-form-section.html',
  styleUrl: './appointment-form-section.css',
})
export class AppointmentFormSection {
  activeStep = 1;

  customerName: string = '';
  customerPhone: string = '';
  customerEmail: string = ''

  today: Date = new Date();
  selectedDate: Date | null = null;
  selectedTime: string | null = null;

  // Regex für Validierung
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private phoneRegex = /^[0-9+\-\s()]{6,}$/;

  // Getter: Ist Step 1 gültig?
  get isStep1Valid(): boolean {
    return (
      this.customerName.trim().length > 1 &&
      this.phoneRegex.test(this.customerPhone.trim()) &&
      this.emailRegex.test(this.customerEmail.trim())
    );
  }



  availableTimes = [
    { label: '09:00', value: '09:00' },
    { label: '10:00', value: '10:00' },
    { label: '11:00', value: '11:00' },
    { label: '12:00', value: '12:00' },
    { label: '13:00', value: '13:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' }
  ];

  get isStep2Valid(): boolean {
    return !!this.selectedDate && !!this.selectedTime;
  }



}

