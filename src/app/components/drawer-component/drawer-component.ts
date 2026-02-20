import {Component, Input, input, output} from '@angular/core';
import {Drawer} from 'primeng/drawer';
import {FormsModule} from '@angular/forms';
import {DatePicker} from 'primeng/datepicker';
import {InputMask} from 'primeng/inputmask';
import {Button} from 'primeng/button';
import {AppointmentSlot} from '../../models/appointment-slot.model';
import {Settings} from '../../models/settings.model';

@Component({
  selector: 'app-drawer-component',
  imports: [
    Drawer,
    FormsModule,
    DatePicker,
    InputMask,
    Button
  ],
  templateUrl: './drawer-component.html',
  styleUrl: './drawer-component.css',
})
export class DrawerComponent {
  visible = input<boolean>(false);
  settingsDrawer = input<boolean>(false);
  @Input() maxAppointments: number = 0;
  appointmentDrawer = input<boolean>(false);

  closed = output<void>();
  savedAppointmentSlot = output<AppointmentSlot>();
  savedSettings = output<Settings>();

  appointmentDate: Date | null = null;
  appointmentTime = '';


  onHide() {
    this.closed.emit();
  }

  saveAppointmentSlot() {
    if (!this.appointmentDate || !this.appointmentTime) return;

    const formattedDate = this.appointmentDate.toLocaleDateString('en-CA');

    this.savedAppointmentSlot.emit({
      date: formattedDate,
      time: this.appointmentTime
    });

    this.onHide();

    this.appointmentDate = null;
    this.appointmentTime = '';
  }

  saveSettings() {
    if(!this.maxAppointments) return;

    const settings: Settings = {
      maxAppointments: this.maxAppointments
    }

    this.savedSettings.emit(settings);
    this.onHide();

  }




}

