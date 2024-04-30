import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatdetailPage } from './chatdetail.page';

describe('ChatdetailPage', () => {
  let component: ChatdetailPage;
  let fixture: ComponentFixture<ChatdetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
