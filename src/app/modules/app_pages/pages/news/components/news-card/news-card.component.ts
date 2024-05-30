import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonLabel]
})
export class NewsCardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
