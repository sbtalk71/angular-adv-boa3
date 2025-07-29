import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { counterReducer, doubleReducer } from './store/counter.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideStore({counter:counterReducer,doubleCounter:doubleReducer})]
};
