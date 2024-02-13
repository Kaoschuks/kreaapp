import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class VerticalBarChartComponent  implements OnInit {

  // options
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  @Input() view: any;
  @Input() legendPosition = LegendPosition.Below;
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  single: any[] = [];

  constructor() { }

  ngOnInit() {
    this.single = [
      {
        "name": "Germany",
        "value": 40632,
        "extra": {
          "code": "de"
        }
      },
      {
        "name": "United States",
        "value": 50000,
        "extra": {
          "code": "us"
        }
      },
      {
        "name": "France",
        "value": 36745,
        "extra": {
          "code": "fr"
        }
      },
      {
        "name": "United Kingdom",
        "value": 36240,
        "extra": {
          "code": "uk"
        }
      },
      {
        "name": "Spain",
        "value": 33000,
        "extra": {
          "code": "es"
        }
      },
      {
        "name": "Italy",
        "value": 35800,
        "extra": {
          "code": "it"
        }
      }
    ];
  }

  onSelect(event: any) {
    console.log(event);
  }

}
