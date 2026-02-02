import { Component, signal } from '@angular/core';
import {VideoHeroSection} from './sections/video-hero-section/video-hero-section';
import {TestPage} from './pages/test-page/test-page';
import {SearchbarHeaderSection} from './sections/searchbar-header-section/searchbar-header-section';
import {IntroSection} from './sections/intro-section/intro-section';
import {StatisticSection} from './sections/statistic-section/statistic-section';
import {CustomerRefSection} from './sections/customer-ref-section/customer-ref-section';
import {ContactSection} from './sections/contact-section/contact-section';
import {MatFormField, MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {CardGridSection} from './sections/card-grid-section/card-grid-section';
import {FooterSection} from './sections/footer-section/footer-section';

@Component({
  selector: 'app-root',
  imports: [VideoHeroSection, TestPage, SearchbarHeaderSection, IntroSection, StatisticSection, CustomerRefSection, ContactSection, MatFormField, MatInput, FormsModule, CardGridSection, FooterSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sandbox');

  v = ''
  d = 'king123'
}
