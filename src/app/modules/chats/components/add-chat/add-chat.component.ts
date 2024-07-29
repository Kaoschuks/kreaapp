import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mic, send } from 'ionicons/icons';
declare let document: any;

@Component({
  selector: 'add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule
  ]
})
export class AddChatComponent {
  @Input() bgColor: string = 'bg-light'
  @Input() action: string = 'sent' || 'typing' || 'failed' || 'uploading'

  isFocus: boolean = false
  fab: boolean = false
  btn: boolean = false
  msg!: string

  constructor() {
    addIcons({ 
      "send": send,
      "mic": mic
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

  toogleVisibility() {
    this.btn = true
    document.getElementById('fileoption').style.visibility = (this.fab) ? 'hidden' : 'visible' ;
    this.fab = (!this.fab) ? true : false ;
  }
}
