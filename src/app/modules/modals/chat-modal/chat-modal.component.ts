import { AfterRenderPhase, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, afterRender, inject } from '@angular/core';
import { IonAvatar, IonButton, IonContent, IonFooter, IonIcon, IonImg, IonItem, IonLabel, IonToolbar } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { AddChatComponent, ChatBubbleComponent } from '../../chats/components';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FullModalComponent, IonToolbar, IonButton, IonItem, IonIcon, IonAvatar, IonImg, IonLabel, IonContent, IonFooter,
    ChatBubbleComponent, AddChatComponent
  ]
})
export class ChatModalComponent implements OnChanges, AfterViewInit {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  @Input() messages: any

  @ViewChild('content') contentRef: ElementRef | undefined;

  constructor() {
    addIcons({ 
      "chevron-back-outline": chevronBackOutline
    });
  }

  ngAfterViewInit() {
    const chat:any = document.getElementById('chat');
    // chat.scrollTop = chat.scrollHeight;
    console.log(chat.scrollHeight)
    // afterRender(() => {
    //   if(this.contentRef)  console.log('content height: ' + this.contentRef.nativeElement.scrollHeight);
    // }, {phase: AfterRenderPhase.Read});
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.scrollToBottom()
  }

  onEnter(text: string) {}


  scrollToBottom() {
    setTimeout(() => {
      const chat:any = document.getElementById('chat');
      chat.scrollTop = chat.scrollHeight;
    }, 100);
  }
}
