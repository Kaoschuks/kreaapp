import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'circleprogress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgCircleProgressModule
  ]
})
export class CircleProgressComponent implements OnChanges {

  @Input() percent: number = 0;
  @Input() radius: number = 20;
  @Input() stroke: number = 3;

  getColor!: string
  spaceStroke!: number

  ngOnChanges(changes: SimpleChanges): void {
    if(this.percent) {
      if(this.percent <= 40) this.getColor = '#c5000f'
      if(this.percent <= 70 && this.percent > 40) this.getColor = '#e0ac08'
      if(this.percent <= 100 && this.percent > 70) this.getColor = '#0054e9'
    }
    if(this.stroke) {
      this.spaceStroke = parseInt(`-${this.stroke}`)
    }
  }

}
