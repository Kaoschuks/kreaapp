import { CommonModule, DatePipe, NgFor, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActionSheetController, IonicModule } from '@ionic/angular';


@Component({
  selector: 'chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule, NgFor, DatePipe, TitleCasePipe
  ]
})
export class ChatBubbleComponent {
  @Input() conversation: Array<any> = [];
  @Input() loader: boolean = false;
  @Output() message = new EventEmitter();
  @Output() action = new EventEmitter();

  private actionSheetCtrl: any = inject(ActionSheetController);
  private buttions: Array<any> = [
    {
      text: 'Reply',
      data: {
        action: 'reply',
      },
    },
    {
      text: 'Forward Message',
      data: {
        action: 'forward',
      },
    },
    {
      text: 'Copy Message',
      data: {
        action: 'copy',
      },
    },
    {
      text: 'Delete Message',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Report Message',
      role: 'destructive',
      data: {
        action: 'report',
      },
    }
  ]

  async openMessageActionSheet(message: any) {
    // this.message.emit(message)
    // this.message.emit(message)
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: this.buttions
    });

    await actionSheet.present();
  }
}
