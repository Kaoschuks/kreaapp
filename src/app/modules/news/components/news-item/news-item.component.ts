import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonIcon, IonImg, IonItem, IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarkOutline, chatbubblesOutline } from 'ionicons/icons';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonItem, IonCard, IonThumbnail, IonLabel, IonButton, IonImg, IonButtons, IonIcon]
})
export class NewsItemComponent {

  constructor() {
    addIcons({ 
      "bookmark-outline": bookmarkOutline,
      "chatbubbles-outline": chatbubblesOutline
    });
  }

}
