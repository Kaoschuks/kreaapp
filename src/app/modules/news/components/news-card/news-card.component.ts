import { NgFor, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCardContent, IonFabButton, IonIcon, IonImg, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, bookmarkOutline, chatbubbleOutline } from 'ionicons/icons';
import { DateAsAgoPipe } from 'src/app/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TitleCasePipe, DateAsAgoPipe,
    IonCard, IonCardContent, IonLabel, IonButton, IonIcon, IonItem, IonFabButton, IonButtons, IonImg
  ]
})
export class NewsCardComponent {
  @Input() news: any = []
  constructor() { 
    addIcons({
      "add": add,
      "chatbubbles": chatbubbleOutline,
      "bookmark": bookmarkOutline,
    })
  }

}
