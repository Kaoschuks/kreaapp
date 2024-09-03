import { NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IonProgressBar, IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonIcon, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],  
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle , IonProgressBar, IonButton, IonButtons, IonIcon, IonBadge, NgIf, TitleCasePipe]
})
export class MobileHeaderComponent {
  @Input() refresh!: boolean
  @Input() color!: string;
  @Input() isIos!: boolean;
  @Output() onclick = new EventEmitter();

  @Input() title!: string

}
