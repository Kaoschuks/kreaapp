import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ChatsPage } from './chats.page';
import { RequestService } from 'src/app/core';
import { HttpClientModule } from '@angular/common/http';

describe('ChatsPage', () => {
  let component: ChatsPage;
  let fixture: ComponentFixture<ChatsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RequestService],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
