import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuageChartComponent } from './guage-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';

describe('GuageChartComponent', () => {
  let component: GuageChartComponent;
  let fixture: ComponentFixture<GuageChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ GuageChartComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(GuageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
