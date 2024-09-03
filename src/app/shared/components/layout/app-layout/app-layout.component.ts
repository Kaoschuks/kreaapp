import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MobileHeaderComponent, MobileFooterComponent } from '../mobile';
import { GlobalsServices } from 'src/app/core';
import { NotificationModalComponent, LanguageModalComponent, OnboardingModalComponent, ProfileModalComponent, FilterModalComponent } from 'src/app/modules';
import { SuccessModalComponent } from '../../modal_components';

const modals = [
  NotificationModalComponent, LanguageModalComponent, OnboardingModalComponent, 
  ProfileModalComponent, FilterModalComponent, SuccessModalComponent
]

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ...modals,
    MobileHeaderComponent, MobileFooterComponent
  ]
})
export class AppLayoutComponent {

  constructor(
    private globals: GlobalsServices
  ) {
  }
  
  get title() {
    return this.globals?.pageData?.title || 'Home';
  }
  
  get refresh() {
    return this.globals.pageRefresh;
  }
  
  get headerColor() {
    return this.globals.pageColor;
  }
  
  get isIos() {
    return this.globals.platform.is('ios');
  }

  get modalData() {
    return this.globals.modalData;
  }

  onModalClosed(event: any) {
  }

  openModal(event: any) {
    this.globals.openModal(event)
  }

  closeModal(event: any) {
    this.globals.closeModal(event);
  }

  onClick(event: any) {

  }
}
