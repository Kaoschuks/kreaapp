import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonToolbar } from '@ionic/angular/standalone';
import { ChatBubbleComponent, AddChatComponent } from './components';
import { ChatDetailService } from './services/chat-detail.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
  standalone: true,
  imports: [
    IonToolbar, IonButton, IonItem, IonIcon, IonAvatar, IonImg, IonLabel, IonFooter, IonHeader, IonContent, IonButtons, IonBackButton,
    ChatBubbleComponent, AddChatComponent]
})
export class ChatDetailPage extends ChatDetailService {

  constructor() {
    super()
   }

}
