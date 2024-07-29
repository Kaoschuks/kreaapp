import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MobileHeaderComponent, MobileFooterComponent } from '../mobile';
import { GlobalsServices } from 'src/app/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MobileHeaderComponent, MobileFooterComponent, NgClass, NgIf]
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

  onHeaderButtonClicked(event: any) {
    this.globals.openModal(event)
  }
}
