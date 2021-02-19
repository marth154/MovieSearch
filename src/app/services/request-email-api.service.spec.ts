import { TestBed } from '@angular/core/testing';

import { RequestEmailApiService } from './request-email-api.service';

describe('RequestEmailApiService', () => {
  let service: RequestEmailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEmailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
