import { ChangeDetectionStrategy, Component, EnvironmentInjector, Input, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge],
})
export class MobileFooterComponent {

  @Input() color!: string;
  constructor() {
  }

}
