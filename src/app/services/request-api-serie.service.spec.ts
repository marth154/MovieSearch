import { TestBed } from '@angular/core/testing';

import { RequestApiSerieService } from './request-api-serie.service';

describe('RequestApiSerieService', () => {
  let service: RequestApiSerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestApiSerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
