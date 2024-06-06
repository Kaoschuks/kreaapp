import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { messages } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatDetailService {

  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    addIcons({ 
      "chevron-back-outline": chevronBackOutline
    });
    this.scrollToBottom()
  }
  
  get messages(): any[] {
    const _messages: any[] = messages.concat(messages);
    return _messages
  }
  
  private get chatid(): string {
    return this.route.snapshot.params['chatid'] || ''
  }

  onEnter(text: string) {
    this.scrollToBottom()
  }

  private scrollToBottom() {
    setTimeout(() => {
      let targetDiv: any = document.getElementById('targetDiv');
      if(targetDiv) targetDiv.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 50);
  }
}
