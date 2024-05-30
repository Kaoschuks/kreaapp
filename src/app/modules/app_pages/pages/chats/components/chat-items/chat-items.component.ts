import { TitleCasePipe, NgFor, DatePipe, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonLabel, IonImg, IonItem, IonListHeader, IonItemSliding, IonItemOption, IonItemOptions, IonBadge, IonNote, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'chat-items',
  templateUrl: './chat-items.component.html',
  styleUrls: ['./chat-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonAvatar, IonLabel, IonImg, IonItem, IonListHeader, IonItemSliding, IonItemOption, IonItemOptions, IonBadge, IonNote, IonText,
    TitleCasePipe, NgFor, DatePipe, SlicePipe, RouterModule]
})
export class ChatItemsComponent{

  @Output() chatEvent = new EventEmitter<any>();
  @Input() chat: any
  @Input() id: number = 0
  constructor() { }

}
