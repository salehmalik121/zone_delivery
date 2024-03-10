import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { ProductService } from "./services/product.service";


export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes), provideAnimationsAsync() , importProvidersFrom(HttpClientModule), 
  ProductService
  
  ]
};
