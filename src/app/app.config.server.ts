import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering,withRoutes } from '@angular/ssr';
import { appConfig } from 'src/app.config';
import { serverRoute } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoute))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
