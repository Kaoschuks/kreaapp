import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SwipeButtonComponent } from './swipe-button/swipe-button.component';
import { ChipsComponent } from './chips/chips.component';
import { OtpInputComponent } from './otp-input/otp-input.component';
import { LoadingComponent } from './loaders';
import { NoContentComponent } from './no-content/no-content.component';
import { MobileFooterComponent } from './layout';
import { BarChartComponent, CircleProgressModule, DonutChartComponent, GuageChartComponent, HorizontalBarChartComponent, LineChartComponent, MobileHeaderComponent, PhonenumberInputComponent, RadarChartComponent } from 'src/app/shared/components';
import { CircleProgressComponent } from './charts/circle-progress/circle-progress.component';

const components = [
  BarChartComponent, CircleProgressModule, CircleProgressComponent, DonutChartComponent, GuageChartComponent, HorizontalBarChartComponent, LineChartComponent, MobileHeaderComponent, PhonenumberInputComponent, RadarChartComponent,
  MobileFooterComponent, MobileFooterComponent,
  SwipeButtonComponent, ChipsComponent, OtpInputComponent, LoadingComponent, NoContentComponent, PhonenumberInputComponent
]


@NgModule({
  declarations: [],
  imports: [
    ...components,
    CommonModule, IonicModule,
    AsyncPipe
  ],
  exports: [
    ...components,
    CommonModule, IonicModule,
    AsyncPipe
  ]
})
export class ComponentsModule { }
