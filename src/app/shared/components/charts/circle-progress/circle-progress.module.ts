import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      showBackground: false,
      showImage: false,
      renderOnClick: false,
      startFromZero: true,
      showSubtitle: false,
      backgroundGradient: true,
      // responsive: true,
      space: -10,
      lazy: false,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
    }),
  ]
})
export class CircleProgressModule { }
