import { Component } from '@angular/core';
import {VideoHeroSection} from '../../sections/video-hero-section/video-hero-section';
import {SearchbarHeaderSection} from '../../sections/searchbar-header-section/searchbar-header-section';
import {
  BrandsAutoSliderComponent
} from '../../../../components/brands-auto-slider-component/brands-auto-slider-component';
import {AppointmentFormSection} from '../../sections/appointment-form-section/appointment-form-section';
import {FooterSection} from '../../sections/footer-section/footer-section';

@Component({
  selector: 'app-contact-page',
  imports: [
    VideoHeroSection,
    SearchbarHeaderSection,
    BrandsAutoSliderComponent,
    AppointmentFormSection,
    FooterSection
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

}
