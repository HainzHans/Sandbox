import { Component } from '@angular/core';
import {
    IconTextButtonComponent
} from "../../../../components/buttons/icon-text-button-component/icon-text-button-component";

@Component({
  selector: 'app-app-content-section',
    imports: [
        IconTextButtonComponent,
    ],
  templateUrl: './app-content-section.html',
  styleUrl: './app-content-section.css',
})
export class AppContentSection {
  activeTab: string = 'analyse';
}
