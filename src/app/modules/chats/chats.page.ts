import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { GlobalsServices, RequestService } from 'src/app/shared/services';
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
  api: RequestService = inject(RequestService);
  chats: Array<any> = []

  async ngAfterViewInit() {
    this.chats = chats
    await this.api.get('https://aideapi.kreador.io/config/all')
  }

  processChat(value: string, chat: any) {
    switch (value) {
      case 'chat':
        this.globals.openModal('chatdetailsmodal')
        break;
    
      default:
        this.globals.toastAlert(value)
        break;
    }
  }

}
