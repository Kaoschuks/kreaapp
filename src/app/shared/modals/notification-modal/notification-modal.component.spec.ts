import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationModalComponent } from './notification-modal.component';

describe('NotificationModalComponent', () => {
  let component: NotificationModalComponent;
  let fixture: ComponentFixture<NotificationModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ NotificationModalComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
