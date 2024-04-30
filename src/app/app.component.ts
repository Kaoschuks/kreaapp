import { Component, inject } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { GlobalsServices } from './shared/services';
import { register } from 'swiper/element/bundle';
import { OnloadingComponent } from './shared/components';
import { NgIf } from '@angular/common';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, OnloadingComponent, IonSplitPane, IonMenu, NgIf],
})
export class AppComponent {
  globals: GlobalsServices = inject(GlobalsServices);

  constructor() {
    try {
      this.globals.initializeApp();
      // this.globals.openModal('walkthroughmodal');
    } catch (error) {
      console.log(error)
    }
  }
}
