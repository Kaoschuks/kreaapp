import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentChatsComponent } from './recent-chats.component';

describe('RecentChatsComponent', () => {
  let component: RecentChatsComponent;
  let fixture: ComponentFixture<RecentChatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RecentChatsComponent ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
