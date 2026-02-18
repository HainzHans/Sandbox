import { Component } from '@angular/core';
import {HeroSection} from '../../sections/shared/hero-section/hero-section';
import {
  BrandsAutoSliderComponent
} from '../../components/brands-auto-slider-component/brands-auto-slider-component';
import {AppointmentFormSection} from '../../sections/contact/appointment-form-section/appointment-form-section';
import {FooterSection} from '../../sections/shared/footer-section/footer-section';
import {HeaderSection} from '../../sections/shared/header-section/header-section';

@Component({
  selector: 'app-contact-page',
  imports: [
    HeroSection,
    BrandsAutoSliderComponent,
    AppointmentFormSection,
    FooterSection,
    HeaderSection
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {

}
