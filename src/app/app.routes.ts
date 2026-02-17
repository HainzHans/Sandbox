import { Routes } from '@angular/router';
import {KingSizePage} from './pages/king-size-page/king-size-page';
import {ContactPage} from './pages/king-size-page/pages/contact-page/contact-page';
import {AppPage} from './pages/app-page/app-page';

export const routes: Routes = [
  { path: '', component: KingSizePage },
  { path: 'contact', component: ContactPage },
  { path: 'app', component: AppPage },
];
