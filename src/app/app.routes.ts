import { Routes } from '@angular/router';
import {KingSizePage} from './pages/king-size-page/king-size-page';
import {ContactPage} from './pages/contact-page/contact-page';
import {AdminPage} from './pages/admin-page/admin-page';
import {adminGuard} from './core/admin.guard';
import {AdminLoginComponent} from './components/admin-login-component/admin-login-component';

export const routes: Routes = [
  { path: '', component: KingSizePage },
  { path: 'contact', component: ContactPage },
  { path: 'admin', component: AdminPage, canActivate: [adminGuard] },
  { path: 'admin-login', component: AdminLoginComponent },
];
