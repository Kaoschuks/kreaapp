import { NgFor, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { ChipsComponent } from 'src/app/shared/components';
import { NewsCardComponent, NewsItemComponent } from './components';
import { NewsService } from './services';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NewsCardComponent, NewsItemComponent,
    IonContent, IonListHeader, IonLabel, IonButton, IonButtons, ChipsComponent, IonHeader, IonToolbar, IonIcon,
    NgFor, SlicePipe
  ]
})
export class NewsPage extends NewsService {

  constructor() {
    super()
  }

}
