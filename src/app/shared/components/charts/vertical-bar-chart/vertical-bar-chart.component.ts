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
  showLegend = false;
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
        "value": 890
      },
      {
        "name": "USA",
        "value": 500
      },
      {
        "name": "France",
        "value": 720
      }
    ];
  }

  onSelect(event: any) {
    console.log(event);
  }

}
