import {Component} from '@angular/core';
import {OrbitComponent} from '../../../components/orbit-component/orbit-component';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';

@Component({
  selector: 'app-intro-section',
  imports: [
    OrbitComponent,
    KingSizeButton
  ],
  templateUrl: './intro-section.html',
  styleUrl: './intro-section.css',
})
export class IntroSection {


}
