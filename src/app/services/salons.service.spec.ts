import { TestBed } from '@angular/core/testing';

import { SalonsService } from './salons.service';

describe('SalonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalonsService = TestBed.get(SalonsService);
    expect(service).toBeTruthy();
  });
});
