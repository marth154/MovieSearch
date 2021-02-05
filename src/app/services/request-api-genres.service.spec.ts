import { TestBed } from '@angular/core/testing';

import { RequestApiGenresService } from './request-api-genres.service';

describe('RequestApiGenresService', () => {
  let service: RequestApiGenresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestApiGenresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
