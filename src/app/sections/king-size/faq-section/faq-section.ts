import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-faq-section',
  imports: [
    NgClass
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
