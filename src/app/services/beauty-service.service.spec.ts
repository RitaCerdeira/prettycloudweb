import { TestBed } from '@angular/core/testing';

import { BeautyServiceService } from './beauty-service.service';

describe('BeautyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeautyServiceService = TestBed.get(BeautyServiceService);
    expect(service).toBeTruthy();
  });
});
