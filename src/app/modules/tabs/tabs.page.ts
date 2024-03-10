import { Component, inject } from '@angular/core';
import { AppLayoutComponent, SuccessModalComponent } from 'src/app/shared/components';
import { GlobalsServices } from 'src/app/shared/services';
import { NgIf } from '@angular/common';
import { FilterModalComponent, LanguageModalComponent, OnboardingModalComponent, NotificationModalComponent, ProfileModalComponent, ChatModalComponent } from '../modals';
import { messages } from 'src/environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    NgIf,
    LanguageModalComponent, OnboardingModalComponent, FilterModalComponent, NotificationModalComponent, ProfileModalComponent, ChatModalComponent,
    AppLayoutComponent, SuccessModalComponent
  ],
})

export class TabsPage {
  globals: GlobalsServices = inject(GlobalsServices);
  canOnboard: boolean = false;
  messages: any[] = messages
  
  onModalClosed(event: any) {

  }
}
