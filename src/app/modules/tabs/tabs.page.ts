import { Component } from '@angular/core';
import { AppLayoutComponent, SuccessModalComponent } from 'src/app/shared/components';
import { NgIf } from '@angular/common';
import { FilterModalComponent, LanguageModalComponent, OnboardingModalComponent, NotificationModalComponent, ProfileModalComponent, ChatModalComponent } from '../../shared/modals';
import { TabsService } from './services/tabs.service';

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

export class TabsPage extends TabsService {
  constructor() {
    super()
  }
}
