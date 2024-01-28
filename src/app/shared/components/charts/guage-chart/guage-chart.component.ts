import { CommonModule } from '@angular/common';
import { Component, Input, NgZone, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { cubicBezier, Gauge } from 'gauge-chart-js';


@Component({
  selector: 'app-guage-chart',
  templateUrl: './guage-chart.component.html',
  styleUrls: ['./guage-chart.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class GuageChartComponent implements OnChanges {

  @Input() radius!: number;
  @Input() value!: number;
  @Input() color: string = '#0f0';

  private ngZone: NgZone = inject(NgZone)
  private easeIn = cubicBezier(0, 0, 0.2, 1);
  private gauge: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.init()
  }

  private init() {
    const _container: any = document.querySelector('.root')
    this.gauge = new Gauge({
      container: _container,
      color: this.color,
      easing: this.easeIn,
      gaugeRadius: this.radius
    });

    this.gauge.setValue(this.value);
    this.ngZone.runOutsideAngular(() => {
      this.gauge.draw();
    });
  }

}
