import {Component, OnInit, signal} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {PrimeTemplate} from 'primeng/api';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {DatePicker} from 'primeng/datepicker';
import {DatePipe} from '@angular/common';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';
import {AppointmentSlotCardComponent} from '../../../components/cards/appointment-slot-card-component/appointment-slot-card-component';
import {AppointmentSlot} from '../../../models/appointment-slot.model';
import {AppointmentSlotsService} from '../../../services/apointment_slots/appointment-slots-service';
import {BookedAppointmentService} from '../../../services/booked_appointments/booked-appointment-service';
import {BookedAppointment} from '../../../models/frontend/booked-appointment.model';

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
    DatePipe,
    AppointmentSlotCardComponent
  ],
  templateUrl: './appointment-form-section.html',
  styleUrl: './appointment-form-section.css',
})
export class AppointmentFormSection implements OnInit{
  activeStep = 1;

  isBooked = signal<boolean>(false)
  appointmentSlots= signal<AppointmentSlot[]>([])

  customerName: string = '';
  customerPhone: string = '';
  customerEmail: string = ''

  selectedAppointmentSlot!: AppointmentSlot;
  // Regex für Validierung
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private phoneRegex = /^[0-9+\-\s()]{6,}$/;


  constructor(private appointmentSlotsService: AppointmentSlotsService,
              private bookedAppointmentService: BookedAppointmentService,) {
  }

  ngOnInit() {
    this.appointmentSlotsService.getFreeSlots().then(slots => {
      this.appointmentSlots.set(slots)
    })
  }


  async createBookingAppointment() {
    if (!this.selectedAppointmentSlot.id || !this.customerName || !this.customerPhone || !this.customerEmail) return;
    const bookingAppointment: BookedAppointment = {
      name: this.customerName,
      telephone: this.customerPhone,
      email: this.customerEmail,
      slotId: this.selectedAppointmentSlot.id,
      appointmentSlot: this.selectedAppointmentSlot
    }

    await this.bookedAppointmentService.create(bookingAppointment).then(() => {
      this.isBooked.set(true)
    })
  }



  get isStep1Valid(): boolean {
    return (
      this.customerName.trim().length > 1 &&
      this.phoneRegex.test(this.customerPhone.trim()) &&
      this.emailRegex.test(this.customerEmail.trim())
    );
  }


  get isStep2Valid(): boolean {
    return !!this.selectedAppointmentSlot;
  }

  selectAppointment(appointment: AppointmentSlot) {
    this.selectedAppointmentSlot = appointment;
  }


}

