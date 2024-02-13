import { Component, Input, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss'],
  standalone: true,
  imports: [
    NgCircleProgressModule
  ]
})
export class CircleChartComponent  {
  @Input() current: number = 30;
  @Input() radius: number = 50;

}
