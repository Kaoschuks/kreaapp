import { TitleCasePipe, NgFor, DatePipe, SlicePipe, NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonLabel, IonImg, IonItem, IonListHeader, IonItemSliding, IonItemOption, IonItemOptions, IonBadge, IonNote, IonText, IonList, IonSkeletonText, IonButton } from '@ionic/angular/standalone';
import { DateAsAgoPipe } from 'src/app/core';

@Component({
  selector: 'chat-items',
  templateUrl: './chat-items.component.html',
  styleUrls: ['./chat-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonList, IonSkeletonText, IonButton,
    IonAvatar, IonLabel, IonImg, IonItem, IonListHeader, IonItemSliding, IonItemOption, IonItemOptions, IonBadge, IonNote, IonText,
    TitleCasePipe, NgFor, DatePipe, SlicePipe, RouterModule, DateAsAgoPipe, NgIf
  ]
})
export class ChatItemsComponent implements AfterViewInit{

  @Output() chatEvent = new EventEmitter<any>();
  @Output() selectedChat = new EventEmitter<any>();
  @Input() chats: any[] = []
  @Input() isLoading: any = false
  @Input() hasMore: any = false
  @Input() title!: string
  @Input() loadCount: number = 20

  loaderELements: any[] = []

  ngAfterViewInit(): void {
    this.loaderELements = new Array(this.loadCount).fill(null)
  }

  onClick(eventName: string, chat: any) {
    this.selectedChat.emit(chat);
    this.chatEvent.emit(eventName)
  }
}
