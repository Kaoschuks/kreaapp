import { Component } from '@angular/core';
import { IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonTitle } from "@ionic/angular/standalone";
import { NgFor } from '@angular/common';
import { ChatItemsComponent, RecentChatsComponent } from './components';
import { ChatsService } from './services/chats.service';

const components: any[] = [
  NgFor,
  IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonTitle,
  IonHeader, IonToolbar, IonSegment, IonSegmentButton,
  RecentChatsComponent, ChatItemsComponent,
]

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: components
})
export class ChatsPage extends ChatsService {

  constructor() {
    super()
  }

}
