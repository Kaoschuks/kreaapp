import { NgFor, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCardContent, IonFabButton, IonIcon, IonImg, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, bookmark, bookmarkOutline, chatbubble, chatbubbleOutline } from 'ionicons/icons';
import { DateAsAgoPipe } from 'src/app/core';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  standalone: true,
  imports: [
    NgFor, TitleCasePipe, DateAsAgoPipe,
    IonCard, IonCardContent, IonLabel, IonButton, IonIcon, IonItem, IonFabButton, IonButtons, IonImg
  ]
})
export class NewsCardComponent  implements OnInit {
  @Input() news: any = []
  constructor() { 
    addIcons({
      "add": add,
      "chatbubbles": chatbubbleOutline,
      "bookmark": bookmarkOutline,
    })
  }

  ngOnInit() {}

}
