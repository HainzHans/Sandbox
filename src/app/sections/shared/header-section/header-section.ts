import { Component } from '@angular/core';
import {KingSizeButton} from "../../../components/buttons/king-size-button/king-size-button";
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-section',
  imports: [
    KingSizeButton,
  ],
  templateUrl: './header-section.html',
  styleUrl: './header-section.css',
})
export class HeaderSection {

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/king-size'])
  }

}
