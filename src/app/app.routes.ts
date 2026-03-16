import { Routes } from '@angular/router';
import {KingSizePage} from './pages/king-size-page/king-size-page';
import {ContactPage} from './pages/contact-page/contact-page';
import {adminGuard} from './core/admin.guard';
import {AdminLoginComponent} from './components/admin-login-component/admin-login-component';
import {SidebarComponent} from './components/sidebar-component/sidebar-component';
import {AdminOverviewPage} from './pages/admin/admin-overview-page/admin-overview-page';
import {AdminAppointmentPage} from './pages/admin/admin-appointment-page/admin-appointment-page';
import {AdminTasksPage} from './pages/admin/admin-tasks-page/admin-tasks-page';
import {UserHomePage} from './pages/user/user-home-page/user-home-page';

export const routes: Routes = [
  { path: '', component: KingSizePage },
  { path: 'contact', component: ContactPage },
  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'app',
    component: SidebarComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'admin-overview', component: AdminOverviewPage, canActivate: [adminGuard] },
      { path: 'admin-appointments', component: AdminAppointmentPage, canActivate: [adminGuard] },
      { path: 'admin-tasks', component: AdminTasksPage, canActivate: [adminGuard] },
      { path: 'user-home', component: UserHomePage},
    ]
  },
];
