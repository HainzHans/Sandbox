import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {AnalyseSection} from '../analyse-section/analyse-section';
import {SetupSection} from '../setup-section/setup-section';
import {
  IconTextButtonComponent
} from '../../../../components/buttons/icon-text-button-component/icon-text-button-component';
import {TradeOfDaySection} from '../trade-of-day-section/trade-of-day-section';

@Component({
  selector: 'app-overview-section',
  imports: [
    MatIcon,
    AnalyseSection,
    SetupSection,
    IconTextButtonComponent,
    TradeOfDaySection
  ],
  templateUrl: './overview-section.html',
  styleUrl: './overview-section.css',
})
export class OverviewSection {

  activeTab: string = 'analyse';


}
