import { TestBed } from '@angular/core/testing';

import { ChatsService } from './chats.service';
import { RequestService } from 'src/app/core';
import { HttpClientModule } from '@angular/common/http';

describe('ChatsService', () => {
  let service: ChatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RequestService],
    });
    service = TestBed.inject(ChatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
