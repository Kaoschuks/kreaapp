import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChatModalComponent } from './chat-modal.component';

describe('ChatModalComponent', () => {
  let component: ChatModalComponent;
  let fixture: ComponentFixture<ChatModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ChatModalComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
