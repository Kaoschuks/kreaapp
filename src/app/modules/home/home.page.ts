import { ChangeDetectionStrategy, Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LegendPosition } from '@swimlane/ngx-charts';
import { IonicModule, Platform } from '@ionic/angular';
import { GlobalsServices } from 'src/app/core';
import { expense } from 'src/environments/environment';
import { OtpInputComponent } from 'src/app/shared/components/otp-input/otp-input.component';
import { CircleChartComponent, LineChartComponent, PieChartComponent, SwipeButtonComponent, VerticalBarChartComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, OtpInputComponent, PieChartComponent, VerticalBarChartComponent, LineChartComponent, SwipeButtonComponent]
})
export class HomePage implements OnInit {
  private platform: Platform = inject(Platform)
  globals: GlobalsServices = inject(GlobalsServices);
  expenses: any[] = []

  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;
  
  ngOnInit() {
    this.expenses = expense;
    this.handleScreenSizeChange();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleScreenSizeChange();
  }

  private changeLegendPostion(defaultValue = true) {
    this.legendPosition = defaultValue ? LegendPosition.Right : LegendPosition.Below;
    this.below = !defaultValue;
  }

  private handleScreenSizeChange() {
    const width = this.platform.width();
    const height = this.platform.height();
    if (width > height) {
      this.changeLegendPostion();
      this.view = [0.9 * width, 0.9 * height];
    } else {
      this.changeLegendPostion(false);
      this.view = [0.95 * width, 0.35 * height];
    }
  }

}
