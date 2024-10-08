import { NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { IonToolbar, IonSearchbar, IonButton, IonRow, IonCol, IonFabButton, IonRouterLink, IonCard, IonAvatar, IonLabel, IonImg, IonItem } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components/modal_components';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
  standalone: true,
  imports: [
    NgIf, NgClass, TitleCasePipe,
    FullModalComponent,
    IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton, IonCard, IonAvatar, IonLabel, IonImg, IonItem,

  ]
})
export class ProfileModalComponent {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  constructor() { }

}
