import {Component} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {Button} from 'primeng/button';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-appointment-steps',
  templateUrl: './appointment-steps-component.html',
  styleUrls: ['./appointment-steps-component.css'],
  imports: [
    Stepper,
    StepList,
    Step,
    StepPanels,
    StepPanel,
    Button,
    PrimeTemplate
  ]
})
export class AppointmentStepsComponent {

  activeStep = 1;


}


