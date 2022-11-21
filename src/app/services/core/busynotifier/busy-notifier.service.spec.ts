import { TestBed } from '@angular/core/testing';

import { BusyNotifierService } from './busy-notifier.service';

describe('BusyNotifierService', () => {
  let service: BusyNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusyNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
