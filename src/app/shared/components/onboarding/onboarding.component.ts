import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IonButton, IonLabel, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonLabel, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OnboardingComponent {
  @ViewChild(IonModal) modal: any;

}
