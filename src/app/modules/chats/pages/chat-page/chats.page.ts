import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonTitle } from "@ionic/angular/standalone";
import { AsyncPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { ChatItemsComponent, RecentChatsComponent } from '../../components';
import { ChatsService } from '../../services/chats.service';
import { LoadingComponent } from 'src/app/shared';
import { BehaviorSubject } from 'rxjs';

const components: any[] = [
  NgFor, NgIf, AsyncPipe, SlicePipe,
  IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonTitle,
  IonHeader, IonToolbar, IonSegment, IonSegmentButton,
  RecentChatsComponent, ChatItemsComponent,
  LoadingComponent
]

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: components
})
export class ChatsPage implements OnDestroy {
  isLoading = new BehaviorSubject<boolean>(true);
  chatInfo: any;

  constructor(
    private chatService: ChatsService
  ) {
  }

  ionViewWillEnter(){
    if(this.chatService.chats.length === 0) this.isLoading.next(true)
    setTimeout(() => {
      this.chatService.getChats();
      this.isLoading.next(false)
    }, 3000);
  }

  ngOnDestroy(): void {
    this.isLoading.unsubscribe()
  }

  get headerColor() {
    return this.chatService.globals.pageColor
  }

  get chats() {
    return this.chatService.chats;
  }

  async onSelectChat($event: any) {
    await this.chatService.processChat($event, this.chatInfo)
  }

}
