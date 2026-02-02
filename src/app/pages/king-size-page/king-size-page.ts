import { Component } from '@angular/core';
import {CardGridSection} from "./sections/card-grid-section/card-grid-section";
import {ContactSection} from "./sections/contact-section/contact-section";
import {CustomerRefSection} from "./sections/customer-ref-section/customer-ref-section";
import {FooterSection} from "./sections/footer-section/footer-section";
import {IntroSection} from "./sections/intro-section/intro-section";
import {SearchbarHeaderSection} from "./sections/searchbar-header-section/searchbar-header-section";
import {StatisticSection} from "./sections/statistic-section/statistic-section";
import {VideoHeroSection} from "./sections/video-hero-section/video-hero-section";
import {BrandsAutoSliderComponent} from '../../components/brands-auto-slider-component/brands-auto-slider-component';

@Component({
  selector: 'app-king-size-page',
  imports: [
    CardGridSection,
    ContactSection,
    CustomerRefSection,
    FooterSection,
    IntroSection,
    SearchbarHeaderSection,
    StatisticSection,
    VideoHeroSection,
    BrandsAutoSliderComponent
  ],
  templateUrl: './king-size-page.html',
  styleUrl: './king-size-page.css',
})
export class KingSizePage {

}
