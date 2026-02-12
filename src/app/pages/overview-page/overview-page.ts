import { Component } from '@angular/core';
import {KingSizeHeaderSection} from '../king-size-page/sections/king-size-header-section/king-size-header-section';
import {OverviewHeaderComponent} from '../../components/header/overview-header-component/overview-header-component';
import {IntroSection} from './sections/intro-section/intro-section';
import {OverviewSection} from './sections/overview-section/overview-section';

@Component({
  selector: 'app-overview-page',
  imports: [
    KingSizeHeaderSection,
    OverviewHeaderComponent,
    IntroSection,
    OverviewSection
  ],
  templateUrl: './overview-page.html',
  styleUrl: './overview-page.css',
})
export class OverviewPage {

}
