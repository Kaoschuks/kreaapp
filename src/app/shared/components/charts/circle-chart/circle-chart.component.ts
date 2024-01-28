import { Component, Input, OnInit } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss'],
  standalone: true,
  imports: [RoundProgressComponent],
})
export class CircleChartComponent  {
  @Input() current!: number;
  @Input() max!: number;
  @Input() radius: number = 100;

  doSomethingWithCurrentValue(event: any) {

  }

}
