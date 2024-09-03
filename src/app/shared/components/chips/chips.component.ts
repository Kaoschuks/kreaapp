import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IonChip } from '@ionic/angular/standalone';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    IonChip
  ]
})
export class ChipsComponent {

  @Input() collections: Array<any> = []
  @Input() active: number = 0
  @Input() mode: string = 'md'
  @Input() hasBorder: boolean = false
  @Input() hasIcon: boolean = false
  @Input() hasClose: boolean = false
  @Input() hasText: boolean = true
  @Input() abbrev: number = 20
  @Input() activeColor: string = 'bg-primary text-white'
  @Input() defaultColor: string = 'bg-transparent text-dark'
  @Output() chipClicked = new EventEmitter<any>();
  @Output() closed = new EventEmitter<any>();
  @Output() index = new EventEmitter<any>();

  chipClickedAction(i: number, data: any) {
    this.active = i;
    this.chipClicked.emit(data)
    this.index.emit(i)
  }
}
