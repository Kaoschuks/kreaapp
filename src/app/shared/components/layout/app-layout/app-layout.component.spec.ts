import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppLayoutComponent } from './app-layout.component';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ AppLayoutComponent, HttpClientModule ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
