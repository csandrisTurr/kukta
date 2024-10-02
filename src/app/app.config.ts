import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BASE_API_URL, baseUrlInterceptor } from './other/baseurl.interceptor';
import { authInterceptor } from './other/auth.interceptor';
import { provideState, provideStore } from '@ngrx/store';
import { authReducer } from './modules/auth/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'auth', reducer: authReducer }),
    provideHttpClient(withInterceptors([baseUrlInterceptor, authInterceptor])),
    {
      provide: BASE_API_URL, useValue: 'http://localhost:3001', multi: true,
    }
  ]
};
