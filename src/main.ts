import { ErrorHandler, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { RequestService, StorageService, GlobalsServices, OfflineManagerService, NetworkInterceptor, RequestInterceptorService, CachingInterceptor, InactivityInterceptor, GlobalErrorHandlerService, WebWorkersProvider, ImageCacheWorker } from './app/core';


if (environment.production) {
  enableProdMode();
  defineCustomElements(window);
}

bootstrapApplication(AppComponent, {
  providers: [
    RequestService, StorageService, GlobalsServices, OfflineManagerService, WebWorkersProvider, ImageCacheWorker,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    provideIonicAngular(),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(
      routes
    ),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: NetworkInterceptor, 
      multi: true 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true,
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: InactivityInterceptor, 
      multi: true 
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
});
