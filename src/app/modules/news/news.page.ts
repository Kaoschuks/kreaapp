import { NgFor, SlicePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonListHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ChipsComponent, MobileHeaderComponent } from 'src/app/shared/components';
import { NewsCardComponent, NewsItemComponent } from './components';
import { NewsService } from './services';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NewsCardComponent, NewsItemComponent, MobileHeaderComponent,
    IonContent, IonListHeader, IonLabel, IonButton, IonButtons, ChipsComponent, IonHeader, IonToolbar, IonIcon, IonTitle,
    NgFor, SlicePipe, TitleCasePipe
  ]
})
export class NewsPage extends NewsService {

  constructor() {
    super()
  }

}
