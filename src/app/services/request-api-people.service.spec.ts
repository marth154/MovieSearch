import { TestBed } from '@angular/core/testing';

import { RequestApiPeopleService } from './request-api-people.service';

describe('RequestApiPeopleService', () => {
  let service: RequestApiPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestApiPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
