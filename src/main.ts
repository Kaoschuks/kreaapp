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
import { GlobalErrorHandlerService , CachingInterceptor, GlobalsServices, RequestInterceptorService, NetworkProvider } from './app/core';
import { SplashScreen } from '@capacitor/splash-screen';


if (environment.production) {
  enableProdMode();
  defineCustomElements(window);
}

export function initializeApp(
  globals: GlobalsServices, 
  network: NetworkProvider
) {
  return async () => { 
    try {
      globals.setUrlTitle();
      network.checkNetwork()
      await globals.changeStatusBarColor('#ffffff', false, false);
      if(globals.platform.is('capacitor')) await SplashScreen.hide({fadeOutDuration: 400});

      globals.openModal('walkthroughmodal');
      setTimeout(async () => {
        globals.appLoading = false;
        await globals.menuCtrl.enable(false)
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    importProvidersFrom(BrowserAnimationsModule),
    provideIonicAngular({
      animated: true,
      navAnimation: iosTransitionAnimation,
      sanitizerEnabled: true,
      // mode: 'md',
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
      deps: [ GlobalsServices, NetworkProvider ], 
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
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
  ],
});
