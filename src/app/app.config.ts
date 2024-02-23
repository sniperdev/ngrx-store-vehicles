import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducers } from '../store/counter/counter.reducers'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      counter: counterReducers
    }),
    provideEffects(),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })

  ]
};
