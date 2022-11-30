import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexGrid,
  ApexDataLabels,
  ApexMarkers,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  fill: ApexFill;
  colors: any[];
};

@Component({
  selector: 'linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent implements OnInit {

  @Input() chartTitle: string
  @Input() chartLabels: Array<string>
  @Input() chartData: Array<any>
  @Input() chartHeight: number
  @Input() chartWidth: number

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: this.chartTitle,
          data: this.chartData
        }
      ],
      chart: {
        height: this.chartHeight,
        width: this.chartWidth,
        type: "area",
        stacked: false,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        }
      },
      colors: ["#bfe6ff"],
      grid: {
        show: false,
        xaxis: {
          lines: {
              show: false
          },
        },
        yaxis: {
          lines: {
              show: false
          },
        },
      },
      xaxis: {
        categories: this.chartLabels,
        labels: {
          show: true
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
    };
  }

}
