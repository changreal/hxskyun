import { TestBed } from '@angular/core/testing';

import { ToastServiceProvider  } from './toast-service.service';

describe('ToastServiceService', () => {
  let service: ToastServiceProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastServiceProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
