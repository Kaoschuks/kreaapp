import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonAvatar, IonImg, IonLabel, IonListHeader, IonSkeletonText } from '@ionic/angular/standalone';

@Component({
  selector: 'recent-chats',
  templateUrl: './recent-chats.component.html',
  styleUrls: ['./recent-chats.component.scss'],
  standalone: true,
  imports: [IonAvatar, IonLabel, IonImg, IonListHeader, IonSkeletonText, TitleCasePipe, NgFor, NgIf]
})
export class RecentChatsComponent {
  @Input() matches: Array<any> = [];
  @Input() isLoading: any = false;
  @Input() title!: string;
  @Input() activeColor: string = 'primary';
  @Output() onclick = new EventEmitter();
  @Output() selectedChat = new EventEmitter<any>();

  loaderELements: any[] = new Array(20).fill(null)

  constructor() {}
}
