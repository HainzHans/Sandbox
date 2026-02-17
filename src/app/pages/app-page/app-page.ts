import {Component, effect} from '@angular/core';
import {AppSideNavigationComponent} from './components/app-side-navigation-component/app-side-navigation-component';
import {AppHeaderComponent} from './components/app-header-component/app-header-component';
import {AppSection} from './models/app-section.model';
import {AppNavigationService} from './services/app-navigation-service/app-navigation-service';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-app-page',
  imports: [
    AppSideNavigationComponent,
    AppHeaderComponent,
    NgComponentOutlet
  ],
  templateUrl: './app-page.html',
  styleUrl: './app-page.css',
})
export class AppPage {

  activeAppSection?: AppSection

  constructor(private appNavigationService: AppNavigationService) {
    effect(() => {
      this.activeAppSection = this.appNavigationService.activeAppSection()
    });
  }

}
