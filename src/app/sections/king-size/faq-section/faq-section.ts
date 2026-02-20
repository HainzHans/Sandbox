import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel} from 'primeng/accordion';

@Component({
  selector: 'app-faq-section',
  imports: [
    NgClass,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent
  ],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css',
})
export class FaqSection {

  questions = [
    {
      title: 'Wie läuft das Coaching ab?',
      text: 'Platzhalter.',
      value: 0
    },
    {
      title: 'Brauche ich Vorkenntnisse?',
      text: 'Platzhalter.',
      value: 1
    },
    {
      title: 'Wie viel Zeit muss ich investieren?',
      text: 'Platzhalter.',
      value: 2
    },
    {
      title: 'Was kostet das Coaching?',
      text: 'Platzhalter.',
      value: 3
    },
    {
      title: 'Was passiert nach der Buchung?',
      text: 'Platzhalter.',
      value: 4
    }

  ]

  openedFAQ: number = 0;

  toggleFAQ(index: number) {
    this.openedFAQ = this.openedFAQ === index ? -1 : index;
  }

}
