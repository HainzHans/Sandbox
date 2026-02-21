import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import {definePreset} from '@primeuix/themes';


const MyPresent = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#e8f9f0',
      100: '#d1f3e1',
      200: '#a3e7c3',
      300: '#75dca5',
      400: '#2ecc71',
      500: '#2ecc71',
      600: '#2ecc71',
      700: '#1f9a52',
      800: '#177b41',
      900: '#0f5d30',
      950: '#093e20'
    }
  }
});


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyPresent
      }
    })
  ]
};


