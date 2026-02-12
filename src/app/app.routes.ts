import { Routes } from '@angular/router';
import {KingSizePage} from './pages/king-size-page/king-size-page';
import {ContactPage} from './pages/king-size-page/pages/contact-page/contact-page';
import {OverviewPage} from './pages/overview-page/overview-page';

export const routes: Routes = [
  {
    path: 'king-size',
    children: [
      { path: '', component: KingSizePage },
      { path: 'contact', component: ContactPage },
      { path: 'overview', component: OverviewPage }
    ]
  }
];
