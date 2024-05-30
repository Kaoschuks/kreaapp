import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared';

@Component({
  selector: 'notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FullModalComponent]
})
export class NotificationModalComponent  implements OnChanges {

  @Input() isOpen!: boolean;
  globals: GlobalsServices = inject(GlobalsServices);
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
