import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: [NgxChartsModule],
})
export class PieChartComponent  implements OnInit {

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  @Input() view: any;
  @Input() legendPosition = LegendPosition.Right;
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

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
