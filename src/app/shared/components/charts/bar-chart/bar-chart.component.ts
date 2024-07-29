import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgApexchartsModule, NgIf ]
})
export class BarChartComponent implements OnChanges {
  @Input() height: number = 250;
  @Input() chartTitle: string = '';
  @Input() chartType: string = 'bar';
  @Input() isStacked: boolean = true;
  @Input() isSparkline: boolean = false;
  @Input() columnWidth: string = '40%';
  @Input() chartColors: string[] = ['#0054e9', '#c5000f'];
  @Input() xaxisLabelColor: string = '#78909c';
  @Input() chartSeries: Array<any> = [{
    name: 'Credit',
    data: [10, 12, 21, 30, 49, 10, 12, 9, 15, 100, 0, 12]
  },{
    name: 'Debit',
    data: [-30, -40, -45, -50, -49, -60, -70, -91, -120, -25, -25, -80]
  }];
  @Input() showLegend: boolean = false;
  @Input() chartLabels: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() showXaxisLabels: boolean = true; // Toggle xaxis label - Default is TRUE
  @Input() showYaxisLabels: boolean = true; // Toggle yaxis label - Default is FALSE
  @Input() distributed: boolean = false; // A distributed column chart means all the columns in the chart will have different colors.

  chartOptions: any;

  ngOnChanges() {
    this.chartOptions = {
      series: this.chartSeries,
      chart: {
        toolbar: {
          show: false // Hide the toolbar
        },
        type: this.chartType,
        stacked: this.isStacked,
        height: this.height,
        sparkline: {
          enabled: this.isSparkline,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: this.columnWidth,
          dataLabels: {
            enabled: false // This disables the display of labels
          }
        }
      },
      grid: {
        show: false // Hide gridlines
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
          style: {
            colors: this.xaxisLabelColor,
          },
        },
      },
      colors: this.chartColors,
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
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: this.showLegend
      }
    };
  }
}
