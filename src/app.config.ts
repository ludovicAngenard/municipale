import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom,ApplicationConfig } from '@angular/core';
import { provideClientHydration, withEventReplay, withIncrementalHydration } from '@angular/platform-browser';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppModule } from './app/app.module';
import routeConfig from './app/app.routes';
const scrollOption: InMemoryScrollingOptions ={
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
}
export const appConfig: ApplicationConfig  = {
  providers: [
    importProvidersFrom(AppModule),
    provideHttpClient(),
    provideRouter(routeConfig, withInMemoryScrolling(scrollOption)),
    provideClientHydration(
      withIncrementalHydration(),
      withEventReplay()
    ),
  ]
};