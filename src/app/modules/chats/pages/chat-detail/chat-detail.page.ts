import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonToolbar } from '@ionic/angular/standalone';
import { ChatBubbleComponent, AddChatComponent } from '../../components';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
  standalone: true,
  imports: [
    IonToolbar, IonButton, IonItem, IonIcon, IonAvatar, IonImg, IonLabel, IonFooter, IonHeader, IonContent, IonButtons, IonBackButton,
    ChatBubbleComponent, AddChatComponent]
})
export class ChatDetailPage implements AfterViewInit {

  constructor(
    private chatService: ChatsService
  ) {
    addIcons({ 
      "chevron-back-outline": chevronBackOutline
    });
  }

  ngAfterViewInit() {
    this.chatService.scrollToBottom()
  }

  get headerColor() {
    return this.chatService.globals.pageColor
  }

  get messages() {
    return this.chatService.messages;
  }

}
