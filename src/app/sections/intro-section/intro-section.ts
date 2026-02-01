import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {OrbitComponent} from '../../components/orbit-component/orbit-component';

@Component({
  selector: 'app-intro-section',
  imports: [
    MatIcon,
    OrbitComponent
  ],
  templateUrl: './intro-section.html',
  styleUrl: './intro-section.css',
})
export class IntroSection {


}
