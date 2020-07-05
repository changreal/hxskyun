import { TestBed } from '@angular/core/testing';

import { MylocalstorageService } from './mylocalstorage.service';

describe('MylocalstorageService', () => {
  let service: MylocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
