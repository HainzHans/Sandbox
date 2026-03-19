import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import {
  Appointment,
  AppointmentType,
  CreateAppointmentDto,
  UpdateAppointmentDto,
} from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment-service/appointment.service';
import {FormatDatePipe} from '../../../pipe/formatDatePipe';

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
    FormatDatePipe,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './admin-appointment-page.html',
  styleUrl: './admin-appointment-page.css',
})
export class AdminAppointmentPage implements OnInit {

  // ── Dialog state ─────────────────────────────────────────
  showDialog = signal(false);
  editMode   = signal(false);
  loading    = signal(false);

  dialogType:          AppointmentType = 'livetrading';
  dialogDate:          Date | null = null;
  dialogTime:          Date | null = null;
  dialogStripePriceId: string | null = null;
  editingId:           string | null = null;

  // ── Data ─────────────────────────────────────────────────
  liveTradingAppointments: Appointment[] = [];
  mentoringAppointments:   Appointment[] = [];

  constructor(
    private messageService:      MessageService,
    private confirmationService: ConfirmationService,
    private appointmentService:  AppointmentService,
  ) {}

  ngOnInit() {
    this.loadAppointments();
  }

  // ── Load ─────────────────────────────────────────────────
  private async loadAppointments() {
    this.loading.set(true);
    try {
      const all = await this.appointmentService.getAll();
      this.liveTradingAppointments = all.filter(a => a.type === 'livetrading');
      this.mentoringAppointments   = all.filter(a => a.type === 'mentoring');
    } catch {
      this.messageService.add({
        severity: 'error',
        summary:  'Fehler',
        detail:   'Termine konnten nicht geladen werden.',
      });
    } finally {
      this.loading.set(false);
    }
  }

  // ── Open dialog ──────────────────────────────────────────
  openCreate(type: AppointmentType) {
    this.dialogType          = type;
    this.dialogDate          = null;
    this.dialogTime          = null;
    this.dialogStripePriceId = null;
    this.editingId           = null;
    this.editMode.set(false);
    this.showDialog.set(true);
  }

  openEdit(appt: Appointment) {
    this.dialogType          = appt.type;
    this.dialogDate          = new Date(appt.date + 'T00:00:00');
    this.dialogTime          = new Date(`1970-01-01T${appt.time}`);
    this.dialogStripePriceId = appt.stripe_price_id;
    this.editingId           = appt.id;
    this.editMode.set(true);
    this.showDialog.set(true);
  }

  closeDialog() {
    this.showDialog.set(false);
  }

  // ── Save ─────────────────────────────────────────────────
  async save() {
    if (!this.dialogDate || !this.dialogTime) {
      this.messageService.add({
        severity: 'warn',
        summary:  'Hinweis',
        detail:   'Bitte Datum und Uhrzeit angeben.',
      });
      return;
    }

    // 'YYYY-MM-DD' — Supabase-Format
    const day     = String(this.dialogDate.getDate()).padStart(2, '0');
    const month   = String(this.dialogDate.getMonth() + 1).padStart(2, '0');
    const year    = this.dialogDate.getFullYear();
    const dateStr = `${year}-${month}-${day}`;  // → 'YYYY-MM-DD' für Supabase

    // 'HH:MM' — Supabase-Format
    const hours   = String(this.dialogTime.getHours()).padStart(2, '0');
    const minutes = String(this.dialogTime.getMinutes()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}`;

    this.loading.set(true);

    try {
      if (this.editMode() && this.editingId) {

        const dto: UpdateAppointmentDto = {
          date:            dateStr,
          time:            timeStr,
          stripe_price_id: this.dialogStripePriceId,
        };
        const updated = await this.appointmentService.update(this.editingId, dto);
        this.replaceInList(updated);
        this.messageService.add({
          severity: 'success',
          summary:  'Gespeichert',
          detail:   'Termin wurde aktualisiert.',
        });

      } else {

        const dto: CreateAppointmentDto = {
          type:            this.dialogType,
          date:            dateStr,
          time:            timeStr,
          stripe_price_id: this.dialogStripePriceId,
        };
        const created = await this.appointmentService.create(dto);
        this.addToList(created);
        const label = this.dialogType === 'livetrading' ? 'LiveTrading' : 'Mentoring';
        this.messageService.add({
          severity: 'success',
          summary:  'Erstellt',
          detail:   `${label}-Termin am ${dateStr} um ${timeStr} Uhr angelegt.`,
        });

      }
      this.closeDialog();
    } catch {
      this.messageService.add({
        severity: 'error',
        summary:  'Fehler',
        detail:   'Termin konnte nicht gespeichert werden.',
      });
    } finally {
      this.loading.set(false);
    }
  }

  // ── Delete ───────────────────────────────────────────────
  confirmDelete(appt: Appointment, event: Event) {
    this.confirmationService.confirm({
      target:                event.target as EventTarget,
      message:               `Termin am ${appt.date} um ${appt.time} Uhr wirklich löschen?`,
      header:                'Termin löschen',
      icon:                  'pi pi-trash',
      acceptButtonStyleClass: 'p-button-danger',
      accept:                () => this.deleteAppointment(appt),
    });
  }

  private async deleteAppointment(appt: Appointment) {
    this.loading.set(true);
    try {
      await this.appointmentService.delete(appt.id);
      this.removeFromList(appt);
      this.messageService.add({
        severity: 'info',
        summary:  'Gelöscht',
        detail:   'Termin wurde entfernt.',
      });
    } catch {
      this.messageService.add({
        severity: 'error',
        summary:  'Fehler',
        detail:   'Termin konnte nicht gelöscht werden.',
      });
    } finally {
      this.loading.set(false);
    }
  }

  // ── List helpers ─────────────────────────────────────────
  private addToList(appt: Appointment) {
    if (appt.type === 'livetrading') {
      this.liveTradingAppointments = [...this.liveTradingAppointments, appt];
    } else {
      this.mentoringAppointments = [...this.mentoringAppointments, appt];
    }
  }

  private replaceInList(appt: Appointment) {
    if (appt.type === 'livetrading') {
      this.liveTradingAppointments = this.liveTradingAppointments
        .map(a => a.id === appt.id ? appt : a);
    } else {
      this.mentoringAppointments = this.mentoringAppointments
        .map(a => a.id === appt.id ? appt : a);
    }
  }

  private removeFromList(appt: Appointment) {
    if (appt.type === 'livetrading') {
      this.liveTradingAppointments = this.liveTradingAppointments
        .filter(a => a.id !== appt.id);
    } else {
      this.mentoringAppointments = this.mentoringAppointments
        .filter(a => a.id !== appt.id);
    }
  }

  // ── Getter ───────────────────────────────────────────────
  get dialogTitle(): string {
    const label = this.dialogType === 'livetrading' ? 'LiveTrading' : 'Mentoring';
    return this.editMode() ? `${label}-Termin bearbeiten` : `${label}-Termin erstellen`;
  }
}
