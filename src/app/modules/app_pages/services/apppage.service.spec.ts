import { TestBed } from '@angular/core/testing';

import { ApppageService } from './apppage.service';

describe('ApppageService', () => {
  let service: ApppageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApppageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
