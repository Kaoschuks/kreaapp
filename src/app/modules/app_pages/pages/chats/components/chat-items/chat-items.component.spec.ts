import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatItemsComponent } from './chat-items.component';

describe('ChatItemsComponent', () => {
  let component: ChatItemsComponent;
  let fixture: ComponentFixture<ChatItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ChatItemsComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
