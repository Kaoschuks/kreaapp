import { NgIf, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { 
  FullModalComponent, OnboardingComponent 
} from 'src/app/shared';

@Component({
  selector: 'onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf, NgClass,
    FullModalComponent, OnboardingComponent,
    IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton
  ]
})
export class OnboardingModalComponent {

  @Input() isOpen: boolean = false;
  globals: GlobalsServices = inject(GlobalsServices);

}
