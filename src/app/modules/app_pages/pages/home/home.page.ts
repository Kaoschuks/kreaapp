import { ChangeDetectionStrategy, Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { GlobalsServices } from 'src/app/core';
import { OtpInputComponent } from 'src/app/shared/components/otp-input/otp-input.component';
import { BarChartComponent, CircleProgressModule, DonutChartComponent, GuageChartComponent, SwipeButtonComponent } from 'src/app/shared/components';
import { CircleProgressComponent } from 'src/app/shared/components/charts/circle-progress/circle-progress.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule, OtpInputComponent, SwipeButtonComponent, 
    GuageChartComponent, BarChartComponent, CircleProgressModule, CircleProgressComponent, DonutChartComponent
  ]
})
export class HomePage implements OnInit {
  private platform: Platform = inject(Platform)
  globals: GlobalsServices = inject(GlobalsServices);
  
  ngOnInit() {
  }

}
