import { ErrorHandler, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { GlobalErrorHandlerService, CachingInterceptor, GlobalsServices, RequestInterceptorService, NetworkInterceptor, InactivityInterceptor, RequestService, StorageService, NetworkProvider, OfflineManagerService } from './app/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';


if (environment.production) {
  enableProdMode();
  defineCustomElements(window);
}

bootstrapApplication(AppComponent, {
  providers: [
    StatusBar,
    RequestService, StorageService, GlobalsServices, NetworkProvider, OfflineManagerService,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    importProvidersFrom(BrowserAnimationsModule),
    provideIonicAngular({
      animated: true,
      sanitizerEnabled: true,
      mode: 'md',
      swipeBackEnabled: true,
    }),
    provideRouter(
      routes, withComponentInputBinding()
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
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
