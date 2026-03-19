import {Component, OnInit} from '@angular/core';
import {OrbitComponent} from '../../../components/orbit-component/orbit-component';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';
import {AppointmentService} from '../../../services/appointment-service/appointment.service';

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

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.appointmentService.getAvailableByType('mentoring').then((appointments) => {
      this.freeSlots = appointments.length
    })
  }
}
