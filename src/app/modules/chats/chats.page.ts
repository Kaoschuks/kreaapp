import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/shared/services';
import { chats } from 'src/environments/environment';
import { IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonHeader, IonToolbar, IonSegment, IonSegmentButton } from "@ionic/angular/standalone";
import { NgFor } from '@angular/common';
import { ChatItemsComponent, RecentChatsComponent } from './components';

const components: any[] = [
  NgFor,
  IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard,
  IonHeader, IonToolbar, IonSegment, IonSegmentButton,
  RecentChatsComponent, ChatItemsComponent
]

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: components
})
export class ChatsPage implements AfterViewInit {
  globals: GlobalsServices = inject(GlobalsServices);
  chats: Array<any> = []

  ngAfterViewInit(): void {
    this.chats = chats
  }

  openChat() {
    this.globals.openModal('chatdetailsmodal')
  }

}
