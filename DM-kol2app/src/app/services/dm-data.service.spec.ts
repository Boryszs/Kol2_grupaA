import { TestBed } from '@angular/core/testing';

import { DMDataService } from './dm-data.service';

describe('DMDataService', () => {
  let service: DMDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DMDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
