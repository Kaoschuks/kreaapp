import { Injectable, inject } from '@angular/core';
import { GlobalsServices, RequestService } from 'src/app/core';
import { chats } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  globals: GlobalsServices = inject(GlobalsServices);
  api: RequestService = inject(RequestService);
  chats: Array<any> = []

  constructor(){
    this.getChats()
  }

  private async getChats() {
    this.chats = chats
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
