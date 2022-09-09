import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalsServices } from './core/globals';

export const providers: Array<any> = [
  NgxSpinnerService,
  GlobalsServices,
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
];

@NgModule({
	imports: [
    CommonModule,
	],
  providers: providers
})
export class ServicesModule { }
