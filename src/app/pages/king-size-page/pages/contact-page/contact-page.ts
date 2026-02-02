import { Component } from '@angular/core';
import {VideoHeroSection} from '../../sections/video-hero-section/video-hero-section';
import {SearchbarHeaderSection} from '../../sections/searchbar-header-section/searchbar-header-section';

@Component({
  selector: 'app-contact-page',
  imports: [
    VideoHeroSection,
    SearchbarHeaderSection
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

}
