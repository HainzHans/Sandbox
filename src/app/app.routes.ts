import { Routes } from '@angular/router';
import {KingSizePage} from './pages/king-size-page/king-size-page';
import {ContactPage} from './pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: KingSizePage },
  { path: 'contact', component: ContactPage },
];
