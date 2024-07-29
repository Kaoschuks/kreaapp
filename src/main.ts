import { ErrorHandler, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, mdTransitionAnimation, provideIonicAngular } from '@ionic/angular/standalone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { RequestService, StorageService, GlobalsServices, OfflineManagerService, NetworkInterceptor, RequestInterceptorService, CachingInterceptor, InactivityInterceptor, GlobalErrorHandlerService, WebWorkersProvider, ImageCacheWorker } from './app/core';
import { chevronBackCircleOutline } from 'ionicons/icons';


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
    provideIonicAngular({
      // modalEnter: mdTransitionAnimation,
      // modalLeave: mdTransitionAnimation,
      backButtonText: '',
      backButtonIcon: chevronBackCircleOutline,
      swipeBackEnabled: true,
      // mode: 'md'
    }),
    importProvidersFrom(BrowserAnimationsModule),
    provideRouter(
      routes, withPreloading(PreloadAllModules)
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
