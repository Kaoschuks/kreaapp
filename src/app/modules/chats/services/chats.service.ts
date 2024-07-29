import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalsServices, RequestService } from 'src/app/core';
import { chats, messages } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  chats: Array<any> = []

  constructor(
    public readonly globals: GlobalsServices,
    private api: RequestService,
    private readonly route: ActivatedRoute
  ){
  }
  
  get messages(): any[] {
    const _messages: any[] = messages;
    return _messages
  }
  
  private get chatid(): string {
    return this.route.snapshot.params['chatid'] || ''
  }

  onEnter(text: string) {
    this.scrollToBottom()
  }

  scrollToBottom() {
    setTimeout(() => {
      let targetDiv: any = document.getElementById('targetDiv');
      if(targetDiv) targetDiv.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 50);
  }

  async getChats() {
    this.chats = chats
  }

  async processChat(value: string, chat: any) {
    switch (value) {
      case 'chat':
        this.globals.openModal('chatdetailsmodal')
        break;
      case 'chat-details':
        await this.globals.navigate(`/chats/${chat.uid}`, true)
        break;
    
      default:
        this.globals.toastAlert(value)
        break;
    }
  }
}
