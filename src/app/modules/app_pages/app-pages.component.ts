import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AppLayoutComponent, SuccessModalComponent, FullModalComponent } from 'src/app/shared';
import { 
  // LanguageModalComponent, OnboardingModalComponent, 
  NotificationModalComponent, 
  ProfileModalComponent, FilterModalComponent
} from 'src/app/modules/app_pages/modals';
import { ApppageService } from './services/apppage.service';

@Component({
  selector: 'app-pages',
  templateUrl: './app-pages.component.html',
  styleUrls: ['./app-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NotificationModalComponent, 
    ProfileModalComponent, FilterModalComponent,
    AppLayoutComponent, SuccessModalComponent, FullModalComponent
  ],
})
export class AppPagesComponent extends ApppageService{

  constructor() {
    super()
   }

}
