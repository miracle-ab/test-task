import { TestBed } from '@angular/core/testing';

import { CreateApplicationModalService } from './create-application-modal.service';

describe('CreateApplicationModalService', () => {
  let service: CreateApplicationModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateApplicationModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
