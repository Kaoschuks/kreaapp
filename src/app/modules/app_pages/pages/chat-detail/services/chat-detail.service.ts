import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { GlobalsServices } from 'src/app/core';
import { messages } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatDetailService {

  globals: GlobalsServices = inject(GlobalsServices);
  private route: ActivatedRoute = inject(ActivatedRoute);
  messages: any = messages
  private chatid: string = this.route.snapshot.params['chatid'] || ''

  constructor() {
    addIcons({ 
      "chevron-back-outline": chevronBackOutline
    });
    this.scrollToBottom()
   }

  onEnter(text: string) {}

  private scrollToBottom() {
    setTimeout(() => {
      let targetDiv: any = document.getElementById('targetDiv');
      if(targetDiv) targetDiv.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 50);
  }
}
