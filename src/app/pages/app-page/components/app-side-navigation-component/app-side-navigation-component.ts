import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {AppSection} from '../../models/app-section.model';
import {AppNavigationService} from '../../services/app-navigation-service/app-navigation-service';
import {AppSideNavButtonComponent} from '../app-side-nav-button-component/app-side-nav-button-component';

@Component({
  selector: 'app-app-side-navigation-component',
  imports: [
    MatIcon,
    AppSideNavButtonComponent
  ],
  templateUrl: './app-side-navigation-component.html',
  styleUrl: './app-side-navigation-component.css',
})
export class AppSideNavigationComponent implements OnInit{

  allAppSections: AppSection[] = [];

  constructor(private appNavigationService: AppNavigationService) {
  }

  ngOnInit() {
    this.allAppSections = this.appNavigationService.getAllAppSections();
  }

  btnClicked(appSection: AppSection) {
    this.appNavigationService.setActiveAppSection(appSection);
  }

}
