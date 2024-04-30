import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { IonAvatar, IonButton, IonFooter, IonIcon, IonImg, IonItem, IonLabel, IonToolbar, IonHeader, IonContent } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { AddChatComponent, ChatBubbleComponent } from '../../../modules/chats/components';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FullModalComponent, IonToolbar, IonButton, IonItem, IonIcon, IonAvatar, IonImg, IonLabel, IonFooter, IonHeader, IonContent,
    ChatBubbleComponent, AddChatComponent
  ]
})
export class ChatModalComponent implements OnChanges{

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  @Input() messages: any

  constructor() {
    addIcons({ 
      "chevron-back-outline": chevronBackOutline
    });
  }

  async ngOnChanges(changes: SimpleChanges) {
    this.scrollToBottom()
  }

  onEnter(text: string) {}


  scrollToBottom() {
    setTimeout(() => {
      let targetDiv: any = document.getElementById('targetDiv');
      if(targetDiv) targetDiv.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 50);
  }
}
