import {Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from '../../services/auth-service';
import {KingSizeLogoComponent} from '../king-size-logo-component/king-size-logo-component';

export interface NavItem {
  icon: string;
  label: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, KingSizeLogoComponent],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent{
  private authService = inject(AuthService);

  isExpanded = signal(true);

  navItems: NavItem[] = [

  ];

  adminItems: NavItem[] = [
    { icon: 'pi-users', label: 'Übersicht', route: 'admin-overview' },
    { icon: 'pi-calendar', label: 'Termine', route: 'admin-appointments' },
  ];

  toggle() {
    this.isExpanded.update(v => !v);
  }

  setActive(item: NavItem) {
    [...this.navItems, ...this.adminItems].forEach(i => (i.active = false));
    item.active = true;
  }


  logout() {
    this.authService.logout();
  }
}
