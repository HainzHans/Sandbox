import { Component } from '@angular/core';
import {KingSizeButton} from '../../../components/buttons/king-size-button/king-size-button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer-section',
  imports: [
    KingSizeButton
  ],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
})
export class FooterSection {

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate([''])
  }

}
