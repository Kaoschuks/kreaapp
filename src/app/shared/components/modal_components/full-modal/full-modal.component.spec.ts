import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullModalComponent } from './full-modal.component';

describe('FullModalComponent', () => {
  let component: FullModalComponent;
  let fixture: ComponentFixture<FullModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ FullModalComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(FullModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
