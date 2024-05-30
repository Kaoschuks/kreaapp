import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  NgApexchartsModule,
} from 'ng-apexcharts';

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
  @Input() height: number = 200
  @Input() label!: string
  
  public chartOptions: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.init()
  }

  private init() {
    this.chartOptions = {
      series: [this.percentage],
      chart: {
        height: this.height,
        type: "radialBar",
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "14px",
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 20,
              fontSize: "16px",
              color: undefined,
              formatter: (val: any) => {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      },
      labels: [this.label]
    };
  }

}
