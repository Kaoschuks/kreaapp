import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mic, send, share } from 'ionicons/icons';
declare let document: any;

@Component({
  selector: 'add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule, CommonModule
  ]
})
export class AddChatComponent {

  isFocus: boolean = false
  fab: boolean = false
  btn: boolean = false
  msg!: string

  constructor() {
    addIcons({ 
      "mic": mic,
      "send": send,
      "share": share
    });
  }

  async sendMessage() {
  }

  showOptionsToggle(value?: boolean) {
    if (value !== undefined) {
      this.isFocus = value;
      return;
    }
    this.isFocus = !this.isFocus;
  }

  open_file(id: string) {
    this.btn = true;
    setTimeout(() => {
      document.getElementById(id).click()
    }, 500)
  }

  hide_attachment(btn: boolean) {
    this.btn = btn;
  }

  toogleVisibility() {
    this.btn = true
    document.getElementById('fileoption').style.visibility = (this.fab) ? 'hidden' : 'visible' ;
    this.fab = (!this.fab) ? true : false ;
  }
}
