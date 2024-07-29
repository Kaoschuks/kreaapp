import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgApexchartsModule ]
})
export class RadarChartComponent  implements OnChanges {
  @Input() height: number = 300;
  @Input() chartLabels: Array<string> = ["2011", "2012", "2013", "2014", "2015", "2016"];
  @Input() chartType: string = 'radar';
  @Input() chartColors: Array<string> = ["#1a65eb", "#cb1a27", "#ffca22", "#42d77d"];
  @Input() chartData: Array<any> =  [
    {
      name: "Series Blue",
      data: [80, 50, 30, 40, 100, 20]
    },
    {
      name: "Series Green",
      data: [20, 30, 40, 80, 20, 80]
    },
    {
      name: "Series Orange",
      data: [44, 76, 78, 13, 43, 10]
    }
  ];
  @Input() showDataLabels: boolean = false;
  @Input() showLegend: boolean = false;
  @Input() chartTotalLabel!: string;
  @Input() showChartTotalLabel: boolean = true; 

  borderColor!: string
  chartOptions: any;

  ngOnChanges() {
    this.chartOptions = {
      series: this.chartData,
      chart: {
        height: this.height,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
      legend: {
        show: false // This hides the legend
      },
      colors: this.chartColors,
      grid: {
        show: false
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: this.chartLabels
      }
    };
  }
}
