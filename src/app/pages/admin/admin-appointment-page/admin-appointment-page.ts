import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';

export type AppointmentType = 'livetrading' | 'mentoring';

export interface Appointment {
  id: number;
  type: AppointmentType;
  date: string;       // display string "dd.MM.yyyy"
  time: string;       // display string "HH:mm"
  dateRaw: Date;      // for sorting
}

@Component({
  selector: 'app-termine-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    DatePickerModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './admin-appointment-page.html',
  styleUrl: './admin-appointment-page.css',
})
export class AdminAppointmentPage {

  // ── Dialog state ─────────────────────────────────────────
  showDialog = signal(false);
  editMode = signal(false);

  dialogType: AppointmentType = 'livetrading';
  dialogDate: Date | null = null;
  dialogTime: Date | null = null;
  editingId: number | null = null;
  nextId = 10;

  // ── Data ─────────────────────────────────────────────────
  appointments: Appointment[] = [
    { id: 1, type: 'livetrading', date: '14.07.2025', time: '18:00', dateRaw: new Date(2025, 6, 14, 18, 0) },
    { id: 2, type: 'livetrading', date: '16.07.2025', time: '18:00', dateRaw: new Date(2025, 6, 16, 18, 0) },
    { id: 3, type: 'livetrading', date: '21.07.2025', time: '19:30', dateRaw: new Date(2025, 6, 21, 19, 30) },
    { id: 4, type: 'mentoring',   date: '15.07.2025', time: '10:00', dateRaw: new Date(2025, 6, 15, 10, 0) },
    { id: 5, type: 'mentoring',   date: '22.07.2025', time: '10:00', dateRaw: new Date(2025, 6, 22, 10, 0) },
  ];

  get livetradingAppointments() {
    return this.appointments
      .filter(a => a.type === 'livetrading')
      .sort((a, b) => a.dateRaw.getTime() - b.dateRaw.getTime());
  }

  get mentoringAppointments() {
    return this.appointments
      .filter(a => a.type === 'mentoring')
      .sort((a, b) => a.dateRaw.getTime() - b.dateRaw.getTime());
  }

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  // ── Open dialog ──────────────────────────────────────────
  openCreate(type: AppointmentType) {
    this.dialogType = type;
    this.dialogDate = null;
    this.dialogTime = null;
    this.editingId = null;
    this.editMode.set(false);
    this.showDialog.set(true);
  }

  openEdit(appt: Appointment) {
    this.dialogType = appt.type;
    this.dialogDate = new Date(appt.dateRaw);
    this.dialogTime = new Date(appt.dateRaw);
    this.editingId = appt.id;
    this.editMode.set(true);
    this.showDialog.set(true);
  }

  closeDialog() {
    this.showDialog.set(false);
  }

  // ── Save ─────────────────────────────────────────────────
  save() {
    if (!this.dialogDate || !this.dialogTime) {
      this.messageService.add({ severity: 'warn', summary: 'Hinweis', detail: 'Bitte Datum und Uhrzeit angeben.' });
      return;
    }

    const combined = new Date(this.dialogDate);
    combined.setHours(this.dialogTime.getHours(), this.dialogTime.getMinutes());

    const dateStr = combined.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const timeStr = combined.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

    if (this.editMode() && this.editingId !== null) {
      const idx = this.appointments.findIndex(a => a.id === this.editingId);
      if (idx !== -1) {
        this.appointments[idx] = { ...this.appointments[idx], date: dateStr, time: timeStr, dateRaw: combined };
        this.appointments = [...this.appointments];
      }
      this.messageService.add({ severity: 'success', summary: 'Gespeichert', detail: 'Termin wurde aktualisiert.' });
    } else {
      const label = this.dialogType === 'livetrading' ? 'LiveTrading' : 'Mentoring';
      this.appointments = [...this.appointments, {
        id: this.nextId++,
        type: this.dialogType,
        date: dateStr,
        time: timeStr,
        dateRaw: combined,
      }];
      this.messageService.add({ severity: 'success', summary: 'Erstellt', detail: `${label}-Termin am ${dateStr} um ${timeStr} Uhr angelegt.` });
    }

    this.closeDialog();
  }

  // ── Delete ───────────────────────────────────────────────
  confirmDelete(appt: Appointment, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Termin am ${appt.date} um ${appt.time} Uhr wirklich löschen?`,
      header: 'Termin löschen',
      icon: 'pi pi-trash',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.appointments = this.appointments.filter(a => a.id !== appt.id);
        this.messageService.add({ severity: 'info', summary: 'Gelöscht', detail: 'Termin wurde entfernt.' });
      },
    });
  }

  get dialogTitle(): string {
    const label = this.dialogType === 'livetrading' ? 'LiveTrading' : 'Mentoring';
    return this.editMode() ? `${label}-Termin bearbeiten` : `${label}-Termin erstellen`;
  }
}
