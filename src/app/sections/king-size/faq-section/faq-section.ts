import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-faq-section',
  imports: [
    MatIcon
  ],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css',
})
export class FaqSection {

  openedFAQ: number = 0;

  toggleFAQ(index: number) {
    this.openedFAQ = this.openedFAQ === index ? -1 : index;
  }

}
