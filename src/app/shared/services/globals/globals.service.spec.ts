import { TestBed } from '@angular/core/testing';

import { GlobalsServices } from './globals.service';
import { ActivatedRoute, provideRouter } from '@angular/router';

describe('GlobalsService', () => {
  let service: GlobalsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
    }).compileComponents();
    service = TestBed.inject(GlobalsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
