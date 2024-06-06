import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
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
export class AppLayoutComponent implements OnInit {
  globals: GlobalsServices = inject(GlobalsServices);

  ngOnInit(): void {
    console.log(this.globals.platform.is('ios'))
  }

  onHeaderButtonClicked(event: any) {
    this.globals.openModal(event)
  }
}
