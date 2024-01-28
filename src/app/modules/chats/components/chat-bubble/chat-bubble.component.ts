import { CommonModule, DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule, CommonModule, DatePipe
  ]
})
export class ChatBubbleComponent {
  @Input() conversation: Array<any> = [];
  @Input() loader: boolean = false;

}
