import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import {definePreset} from '@primeuix/themes';


const MyPresent = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#2ecc71',
      100: '#2ecc71',
      200: '#2ecc71',
      300: '#2ecc71',
      400: '#2ecc71',
      500: '#2ecc71',
      600: '#2ecc71',
      700: '#2ecc71',
      800: '#2ecc71',
      900: '#2ecc71',
      950: '#2ecc71'
    }
  }
})

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


