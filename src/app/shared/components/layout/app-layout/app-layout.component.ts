import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MobileHeaderComponent, MobileFooterComponent } from '../mobile';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MobileHeaderComponent, MobileFooterComponent]
})
export class AppLayoutComponent  {
  @Input() title!: string
  @Input() refresh: boolean = false
  @Input() color: string = 'white';
  @Output() onHeaderButtonClicked = new EventEmitter();
}
