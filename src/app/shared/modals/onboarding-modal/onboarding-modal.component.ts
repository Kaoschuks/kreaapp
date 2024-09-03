import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components/modal_components';
import { OnboardingComponent } from 'src/app/shared/components/onboarding/onboarding.component';

@Component({
  selector: 'app-onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FullModalComponent, OnboardingComponent,
    IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton
  ]
})
export class OnboardingModalComponent {

  @Input() isOpen: boolean = false;
  globals: GlobalsServices = inject(GlobalsServices);

}
