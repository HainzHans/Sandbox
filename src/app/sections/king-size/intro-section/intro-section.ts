import {Component, OnInit} from '@angular/core';
import {OrbitComponent} from '../../../components/orbit-component/orbit-component';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';
import {AppointmentSlotsService} from '../../../services/apointment_slots/appointment-slots-service';
import {SettingsService} from '../../../services/settings-service/settings-service';

@Component({
  selector: 'app-intro-section',
  imports: [
    OrbitComponent,
    KingSizeButton
  ],
  templateUrl: './intro-section.html',
  styleUrl: './intro-section.css',
})
export class IntroSection implements OnInit{

  freeSlots: number = 0;
  maxSlots: number = 0;

  constructor(private appointmentSlotsService: AppointmentSlotsService,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.appointmentSlotsService.getFreeSlots().then(slots => {
      this.freeSlots = slots?.length
    })

    this.settingsService.get('maxAppointments').then(max => {
      this.maxSlots = Number(max)
    })
  }
}
