import { APP_INITIALIZER, ErrorHandler, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicRouteStrategy, iosTransitionAnimation, provideIonicAngular } from '@ionic/angular/standalone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { GlobalErrorHandlerService , CachingInterceptor, GlobalsServices, RequestInterceptorService, NetworkInterceptor, RequestService, StorageService } from './app/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { InactivityInterceptor } from './app/core/interceptors/inactivity-interceptor';


if (environment.production) {
  enableProdMode();
  defineCustomElements(window);
}

export function initializeApp(
  globals: GlobalsServices, 
) {
  return async () => { 
    try {
      globals.setUrlTitle();

      if(globals.platform.is('capacitor')) await SplashScreen.hide({fadeOutDuration: 400});
      globals.openModal('walkthroughmodal');
    } catch (error) {
      console.log(error)
    }
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    RequestService, StorageService, GlobalsServices,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    importProvidersFrom(BrowserAnimationsModule),
    provideIonicAngular({
      animated: true,
      navAnimation: iosTransitionAnimation,
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
      provide: APP_INITIALIZER, 
      useFactory: initializeApp,
      deps: [ GlobalsServices ], 
      multi: true
    },
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
