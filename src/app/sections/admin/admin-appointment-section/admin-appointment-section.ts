import {Component, input, OnChanges, OnInit, output, signal} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AppointmentSlot} from '../../../models/appointment-slot.model';
import {AppointmentSlotsService} from '../../../services/apointment_slots/appointment-slots-service';
import {DatePipe} from '@angular/common';
import {BookedAppointment} from '../../../models/frontend/booked-appointment.model';
import {BookedAppointmentService} from '../../../services/booked_appointments/booked-appointment-service';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ActionButtonComponent} from '../../../components/buttons/action-button-component/action-button-component';
import {
  AdminAppointmentSlotCardComponent
} from '../../../components/cards/admin-appointment-slot-card-component/admin-appointment-slot-card-component';
import {SmallChipComponent} from '../../../components/chips/small-chip-component/small-chip-component';
import {ChipStatus} from '../../../models/types/chip-status.type';
import {TableComponent} from '../../../components/table-component/table-component';
import {IconButtonComponent} from '../../../components/buttons/icon-button-component/icon-button-component';

@Component({
  selector: 'app-admin-appointment-section',
  imports: [
    TableModule,
    DatePipe,
    ActionButtonComponent,
    AdminAppointmentSlotCardComponent,
    SmallChipComponent,
    ConfirmDialog,
    TableComponent,
    IconButtonComponent
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

  getStatus(row: BookedAppointment): ChipStatus {
    if (!row.appointmentSlot) return '';

    const date = row.appointmentSlot.date;
    const time = row.appointmentSlot.time;

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

