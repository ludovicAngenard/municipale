import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppModule } from './app/app.module';
import routeConfig from './app/app.routes';
const scrollOption: InMemoryScrollingOptions ={
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
}
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppModule),
    provideHttpClient(),
    provideRouter(routeConfig, withInMemoryScrolling(scrollOption)),
    provideClientHydration(withEventReplay())
  ]
};