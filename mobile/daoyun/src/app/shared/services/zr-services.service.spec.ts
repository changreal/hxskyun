import { TestBed } from '@angular/core/testing';

import { ZrServicesService } from './zr-services.service';

describe('ZrServicesService', () => {
  let service: ZrServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZrServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
