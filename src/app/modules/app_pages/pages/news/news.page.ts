import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { ChipsComponent } from 'src/app/shared/components';
import { NewsCardComponent, NewsItemComponent } from './components';
import { GlobalsServices } from 'src/app/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NewsCardComponent, NewsItemComponent,IonContent, IonListHeader, IonLabel, IonButton, ChipsComponent, IonHeader, IonToolbar,
    NgFor
  ]
})
export class NewsPage implements OnInit {
  globals: GlobalsServices = inject(GlobalsServices);
  news: Array<any> = [0,1,2]
  constructor() { }

  ngOnInit() {
  }

}
