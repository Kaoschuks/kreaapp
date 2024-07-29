import { Component } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { FullLoadingComponent, SplashscreenComponent, SuccessModalComponent } from './shared/components';
import { NgIf } from '@angular/common';
import { GlobalsServices } from './core';
import { NotificationModalComponent, LanguageModalComponent, OnboardingModalComponent, ProfileModalComponent, FilterModalComponent } from './modules';
register();

const modals = [
  NotificationModalComponent, LanguageModalComponent, OnboardingModalComponent, 
  ProfileModalComponent, FilterModalComponent, SuccessModalComponent
]

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    ...modals,
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
