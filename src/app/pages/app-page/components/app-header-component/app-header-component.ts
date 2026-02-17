import {Component, effect} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {AppSection} from '../../models/app-section.model';
import {AppNavigationService} from '../../services/app-navigation-service/app-navigation-service';

@Component({
  selector: 'app-app-header-component',
  imports: [
    MatIcon
  ],
  templateUrl: './app-header-component.html',
  styleUrl: './app-header-component.css',
})
export class AppHeaderComponent {

  activeAppSection?: AppSection

  constructor(private appNavigationService: AppNavigationService){
    effect(() => {
      this.activeAppSection = this.appNavigationService.activeAppSection()
    });
  }

}
