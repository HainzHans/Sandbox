import {Component, input, OnChanges, OnInit, output, signal, SimpleChanges} from '@angular/core';
import {TableModule} from 'primeng/table';
import {Button} from 'primeng/button';
import {AppointmentSlot} from '../../../models/appointment-slot.model';
import {AppointmentSlotsService} from '../../../services/apointment_slots/appointment-slots-service';
import {DatePipe} from '@angular/common';
import {BookedAppointment} from '../../../models/booked-appointment.model';
import {BookedAppointmentService} from '../../../services/booked_appointments/booked-appointment-service';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-admin-appointment-section',
  imports: [
    TableModule,
    Button,
    DatePipe,
    ConfirmDialog
  ],
  templateUrl: './admin-appointment-section.html',
  styleUrl: './admin-appointment-section.css',
  providers: [ConfirmationService],
})
export class AdminAppointmentSection implements OnInit, OnChanges{

  appointmentSlots = signal<AppointmentSlot[]>([])
  bookedAppointments = signal<BookedAppointment[]>([])

  refresh = input<number>(0);

  openDrawer = output<void>();



  constructor(private appointmentSlotsService: AppointmentSlotsService,
              private bookedAppointmentService: BookedAppointmentService,
              private confirmationService: ConfirmationService) {
  }

  ngOnChanges() {
    this.loadData()
  }

  ngOnInit() {
    this.loadData()
  }

  toggleDrawer() {
    this.openDrawer.emit();
  }

  loadData() {
    this.appointmentSlotsService.getFreeSlots().then(slots => {
      this.appointmentSlots.set(slots)
    });

    this.bookedAppointmentService.getAll().then(appointments => {
      this.bookedAppointments.set(appointments)
    })
  }

  getStatus(row: any): string {
    if (!row.appointments_slots) return 'Unbekannt';

    const date = row.appointments_slots.date;
    const time = row.appointments_slots.time;

    const appointmentDateTime = new Date(`${date}T${time}`);
    const now = new Date();

    return appointmentDateTime > now ? 'Offen' : 'Abgeschlossen';
  }


  confirmDelete(appointment: AppointmentSlot) {


    this.confirmationService.confirm({
      message: 'Möchtest du diesen Termin wirklich löschen?',
      header: 'Löschen bestätigen',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Ja, löschen',
      rejectLabel: 'Abbrechen',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',

      accept: async () => {
        if (!appointment.id) return;
        await this.appointmentSlotsService.delete(appointment.id);
        this.loadData(); // neu laden
      }
    });
  }



}

