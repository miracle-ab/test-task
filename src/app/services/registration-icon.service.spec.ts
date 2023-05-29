import { TestBed } from '@angular/core/testing';

import { RegistrationIconService } from './registration-icon.service';

describe('RegistrationIconService', () => {
  let service: RegistrationIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
