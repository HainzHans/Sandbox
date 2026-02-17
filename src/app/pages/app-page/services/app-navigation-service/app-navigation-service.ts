import {Injectable, signal} from '@angular/core';
import {AppSection} from '../../models/app-section.model';
import {AppHomeSection} from '../../sections/app-home-section/app-home-section';
import {AppContentSection} from '../../sections/app-content-section/app-content-section';
import {AppAdminSection} from '../../sections/app-admin-section/app-admin-section';

@Injectable({
  providedIn: 'root',
})
export class AppNavigationService {

  activeAppSection = signal<AppSection>(appSections[0])

  setActiveAppSection(appSection: AppSection) {
    appSections.forEach(s => s.isActive = false);
    this.activeAppSection.set(appSection)
    appSection.isActive = true;
  }


  getAllAppSections(): AppSection[] {
    return appSections;
  }

}

export const appSections: AppSection[] = [
  {
    id: 1,
    name: 'Home',
    icon: 'home',
    isActive: true,
    introContent: {
      title: 'Willkommen zurück',
      subtitle: 'Guten Tag'
    },
    component: AppHomeSection
  },
  {
    id: 2,
    name: 'Inhalte',
    icon: 'school',
    isActive: false,
    introContent: {
      title: 'Alle Lerninhalte an einem Ort',
      subtitle: 'Lerne und dominiere den Markt'
    },
    component: AppContentSection
  },
  {
    id: 3,
    name: 'Adminbereich',
    icon: 'terminal',
    isActive: false,
    introContent: {
      title: 'Der Adminbereich',
      subtitle: 'Meine Dildos verwalten'
    },
    component: AppAdminSection
  }
]
