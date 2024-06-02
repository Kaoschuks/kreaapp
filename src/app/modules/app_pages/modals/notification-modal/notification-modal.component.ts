import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared';

@Component({
  selector: 'notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FullModalComponent, IonLabel, NgFor]
})
export class NotificationModalComponent {

  @Input() isOpen!: boolean;
  
  public readonly globals: GlobalsServices = inject(GlobalsServices);
  constructor() { }

}
