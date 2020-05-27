import { TestBed } from '@angular/core/testing';

import { FetchResponseService } from './fetch-response.service';

describe('FetchResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchResponseService = TestBed.get(FetchResponseService);
    expect(service).toBeTruthy();
  });
});
