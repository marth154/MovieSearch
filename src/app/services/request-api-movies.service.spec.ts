import { TestBed } from '@angular/core/testing';

import { RequestApiMoviesService } from './request-api-movies.service';

describe('RequestApiMoviesService', () => {
  let service: RequestApiMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestApiMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
