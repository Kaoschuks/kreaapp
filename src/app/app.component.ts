import { Component } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { FullLoadingComponent, SplashscreenComponent } from './shared/components';
import { NgIf } from '@angular/common';
import { GlobalsServices } from './core';
register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, SplashscreenComponent, IonSplitPane, IonMenu, NgIf, FullLoadingComponent
  ],
})
export class AppComponent {
  canOnboard: boolean = false;

  constructor(
    public globals: GlobalsServices
  ) {
    this.globals.initializeApp()
  }
  
  onModalClosed(event: any) {

  }
  
}
