import { TestBed } from '@angular/core/testing';

import { RightsService } from './rights.service';

describe('RightsService', () => {
  let service: RightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
