import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { LanguageModalComponent } from './language-modal/language-modal.component';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';
import { OnboardingModalComponent } from './onboarding-modal/onboarding-modal.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

const modals = [
  FilterModalComponent,
  LanguageModalComponent, NotificationModalComponent, OnboardingModalComponent, ProfileModalComponent
]

@NgModule({
  declarations: [],
  imports: [
    ...modals,
    CommonModule
  ],
  exports: [
    ...modals,
    CommonModule
  ]
})
export class ModalsModule { }
