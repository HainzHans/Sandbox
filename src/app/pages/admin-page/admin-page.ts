import {Component, OnInit, signal} from '@angular/core';
import {AdminHeaderSection} from '../../sections/admin/admin-header-section/admin-header-section';
import {AdminAppointmentSection} from '../../sections/admin/admin-appointment-section/admin-appointment-section';
import {FormsModule} from '@angular/forms';
import {AppointmentSlotsService} from '../../services/apointment_slots/appointment-slots-service';
import {AppointmentSlot} from '../../models/appointment-slot.model';
import {DrawerComponent} from '../../components/drawer-component/drawer-component';
import {Settings} from '../../models/settings.model';
import {SettingsService} from '../../services/settings-service/settings-service';

@Component({
  selector: 'app-admin-page',
  imports: [
    AdminHeaderSection,
    AdminAppointmentSection,
    FormsModule,
    DrawerComponent,
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage implements OnInit{
  isVisible = false;
  settingsDrawer = false;
  appointmentDrawer = false;

  maxAppointments = signal<number>(0);

  refresh = signal(0);

  constructor(private appointmentSlotsService: AppointmentSlotsService,
              private settingService: SettingsService) {}

  ngOnInit() {
    this.loadData()

  }

  loadData() {
    this.settingService.get('maxAppointments').then(max => {
      this.maxAppointments.set(Number(max))
    })
  }

  async saveAppointment(event: AppointmentSlot) {
    await this.appointmentSlotsService.create({
      date: event.date,
      time: event.time
    });

    this.isVisible = false;

    this.refresh.update(v => v + 1);
  }

  async saveSettings(event: Settings) {
    await this.settingService.set('maxAppointments', event.maxAppointments.toString());

    this.isVisible = false;
  }

}

