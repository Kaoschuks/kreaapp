import { CommonModule, DatePipe, NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { shareOutline } from 'ionicons/icons';
import { DateAsAgoPipe } from 'src/app/core';
import { LongPressDirective } from 'src/app/shared';


@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    LongPressDirective, DateAsAgoPipe,
    IonicModule, NgFor, DatePipe, TitleCasePipe, NgIf, NgClass
  ]
})
export class ChatBubbleComponent {
  @Input() conversation: Array<any> = [];
  @Input() loader: boolean = false;
  @Output() messagedata = new EventEmitter();
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

  constructor() {
    addIcons({
      'share-outline': shareOutline
    })
  }

  async openMessageActionSheet(message: any) {
    // this.messagedata.emit(messagedata)
    // this.messagedata.emit(messagedata)
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: this.buttions
    });

    await actionSheet.present();
  }
}
