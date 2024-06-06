import { NgIf, TitleCasePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IonProgressBar, IonHeader, IonToolbar, IonTitle, IonButton, IonRouterLink, IonButtons, IonIcon, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],  
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle , IonProgressBar, IonButton, IonButtons, IonIcon, IonRouterLink, IonBadge, NgIf, TitleCasePipe]
})
export class MobileHeaderComponent {
  @Input() title!: string
  @Input() refresh!: boolean
  @Input() color!: string;
  @Input() isIos!: boolean;
  @Output() onclick = new EventEmitter();

  constructor() {
  }
}
