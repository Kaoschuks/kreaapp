import { Component, inject } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { FullLoadingComponent, OnloadingComponent } from './shared/components';
import { NgIf } from '@angular/common';
import { GlobalsServices } from './core';
import { SplashScreen } from '@capacitor/splash-screen';
register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, OnloadingComponent, IonSplitPane, IonMenu, NgIf, FullLoadingComponent],
})
export class AppComponent {
  globals: GlobalsServices = inject(GlobalsServices);

  constructor() {
    this.globals.changeTheme(this.globals.getDeviceThemeMode)
    SplashScreen.hide();
    this.globals.initializeApp()
  }
  
}
