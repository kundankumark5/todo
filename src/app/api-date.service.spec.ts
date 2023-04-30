import { TestBed } from '@angular/core/testing';

import { ApiDateService } from './api-date.service';

describe('ApiDateService', () => {
  let service: ApiDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
