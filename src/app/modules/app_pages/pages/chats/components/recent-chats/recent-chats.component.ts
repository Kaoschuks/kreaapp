/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { NgFor, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonAvatar, IonImg, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'recent-chats',
  templateUrl: './recent-chats.component.html',
  styleUrls: ['./recent-chats.component.scss'],
  standalone: true,
  imports: [IonAvatar, IonLabel, IonImg, TitleCasePipe, NgFor]
})
export class RecentChatsComponent {
  @Input() chats: Array<any> = [];
  @Input() matches: Array<any> = [];
  @Input() loader: boolean = false;
  @Input() activeColor: string = 'primary';
  @Output() onclick = new EventEmitter();

  constructor() {}
}
