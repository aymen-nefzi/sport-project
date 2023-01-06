import { TestBed } from '@angular/core/testing';

import { StadiumService } from './stadium.service';

describe('StadiumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadiumService = TestBed.get(StadiumService);
    expect(service).toBeTruthy();
  });
});
