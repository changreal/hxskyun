import { TestBed } from '@angular/core/testing';

import { CityproviderService } from './cityprovider.service';

describe('CityproviderService', () => {
  let service: CityproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
