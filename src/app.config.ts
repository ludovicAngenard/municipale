import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import routeConfig from './app/app.routes';
const scrollOption: InMemoryScrollingOptions ={
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
}
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(AppModule),
    provideRouter(routeConfig, withInMemoryScrolling(scrollOption))
  ]
};