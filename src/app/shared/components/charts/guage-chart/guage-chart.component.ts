import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  NgApexchartsModule,
} from 'ng-apexcharts';
import { getCSSVariableValue } from 'src/app/core/utils/helpers';

@Component({
  selector: 'guage-chart',
  templateUrl: './guage-chart.component.html',
  styleUrls: ['./guage-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgApexchartsModule, NgIf ]
})
export class GuageChartComponent implements OnChanges {
  @Input() percentage: number = 0
  @Input() height: number = 300
  @Input() label!: string
  @Input() colors!: string[]
  
  chartOptions: any;
  private color!: string;

  constructor() {
    this.colors = [
      getCSSVariableValue('--ion-color-danger'),
      getCSSVariableValue('--ion-color-warning'),
      getCSSVariableValue('--ion-color-success'),
      getCSSVariableValue('--ion-color-primary'),
    ]
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init()
  }

  private init() {
    if(this.percentage) {
      if(this.percentage <= 30) this.color = this.colors[0]
      if(this.percentage <= 60 && this.percentage > 30) this.color = this.colors[1]
      if(this.percentage <= 80 && this.percentage > 60) this.color = this.colors[2]
      if(this.percentage <= 100 && this.percentage > 80) this.color = this.colors[3]
    }
    this.chartOptions = {
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: [this.color],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        dashArray: 17,
        // width: 7,
        show: true,
        lineCap: "round",
      },
      colors: this.colors,
      series: [this.percentage],
      chart: {
        height: this.height,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          startAngle: -110,
          endAngle: 110,
          track: {
            startAngle: -110,
            endAngle: 110,
          },
          hollow: {
            size: '75%', // Adjust this value to reduce the thickness
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: [this.label]
    };
  }

}
