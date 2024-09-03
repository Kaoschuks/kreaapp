import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
declare var window: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgApexchartsModule ]
})

export class LineChartComponent implements OnChanges {
  @Input() width: number = window.innerWidth;
  @Input() height: number = 300;
  @Input() hasTooltip: boolean = false;
  @Input() chartTitle: string = '';
  @Input() chartType: string = 'line';
  @Input() chartColors: string[] = ['#0054e9', '#c5000f'];
  @Input() chartLabels: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() chartSeries: Array<any> = [{
    name: 'Credit',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 25, 100, 0, 12]
  }, 
  // {
  //   name: 'Debit',
  //   data: [80, 50, 30, 40, 100, 20, 44, 76, 78, 13, 43, 10]
  // }
];

  @Input() showXaxisLabels: boolean = true; // Toggle xaxis label - Default is TRUE
  @Input() showYaxisLabels: boolean = true; // Toggle yaxis label - Default is TRUE
  @Input() showDataLabels: boolean = false; // Toggle dataLabel show/hide - Default is TRUE

  @ViewChild('chart') chart: ChartComponent | any;
  
  reducedWindowWidth: any;
  chartOptions: any
  
ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions = {
      chart: {
        toolbar: {
          show: false // Hide the toolbar
        },
        type: this.chartType,
        height: this.height,
        sparkline: {
          enabled: false,
        },
      },
      grid: {
        show: false
      },
      series: this.chartSeries,
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false // This hides the legend
      },
      stroke: {
        width: 2,
        colors: this.chartColors,
      },
      fill: {
        colors: this.chartColors,
        gradient: {
          gradientToColors: this.chartColors,
          opacityTo: 0.2,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: this.showYaxisLabels,
        },
      },
      xaxis: {
        labels: {
          show: this.showXaxisLabels,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: this.chartLabels,
      },
      colors: this.chartColors,
    };
    if (this.hasTooltip) this.chartOptions['annotations'] = {
      points: [
        {
          x: 'Oct',
          y: 100,
          marker: {
            size: 4,
            strokeWidth: 2,
            shape: 'circle',
            radius: 2
          },
          label: {
            offsetY: 0,
            text: 'Budget'
          }
        }
      ]
    }
  }


}
