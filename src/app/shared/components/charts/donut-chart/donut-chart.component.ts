import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  NgApexchartsModule,
} from 'ng-apexcharts';
import { getCSSVariableValue } from 'src/app/core/utils/helpers';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgApexchartsModule ]
})
export class DonutChartComponent implements OnChanges {
  @Input() width: number = window.innerWidth;
  @Input() height: number = 300;
  @Input() chartLabels: Array<string> = [];
  @Input() chartType: string = 'donut';
  @Input() chartColors!: Array<string>;
  @Input() chartData: Array<number> =  [44, 105, 13, 43];
  @Input() showDataLabels: boolean = false;
  @Input() showLegend: boolean = false;
  @Input() chartTotalLabel!: string;
  @Input() showChartTotalLabel: boolean = true; 
  @Input() chartWellNumber: string = '80%'; 

  borderColor!: string
  chartOptions: any;

  constructor() {
    this.chartColors = [
      getCSSVariableValue('--ion-color-primary'),
      getCSSVariableValue('--ion-color-danger'),
      getCSSVariableValue('--ion-color-warning'),
      getCSSVariableValue('--ion-color-success'),
    ]
  }

  ngOnChanges() {
    this.chartOptions = {
      series: this.chartData,
      chart: {
        toolbar: {
          show: false // Hide the toolbar
        },
        height: this.height,
        type: this.chartType,
        // sparkline: {
        //   enabled: this.showChartTotalLabel,
        // },
      },
      stroke: {
        lineCap: "round",
        width: 7,
        show: true
      },
      plotOptions: {
        pie: {
          donut: {
            size: this.chartWellNumber,
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: this.chartLabels,
      theme: {
        monochrome: {
          enabled: false,
          color: this.chartColors[0],
          shadeTo: 'light',
          shadeIntensity: 0.4
        }
      },
      colors: this.chartColors,
      title: {
        text: this.chartTotalLabel
      },
      dataLabels: {
        style: {
          stroke: 0
        }
      },
      legend: {
        position: "bottom",
        color: '#069',
        show: this.showLegend
      }
    };
  }
}
