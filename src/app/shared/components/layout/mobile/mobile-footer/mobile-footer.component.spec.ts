import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileFooterComponent } from './mobile-footer.component';
import { ActivatedRoute, RouterModule, provideRouter } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MobileFooterComponent', () => {
  let component: MobileFooterComponent;
  let fixture: ComponentFixture<MobileFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ MobileFooterComponent ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
