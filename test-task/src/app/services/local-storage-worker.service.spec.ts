import { TestBed } from '@angular/core/testing';

import { LocalStorageWorkerService } from './local-storage-worker.service';

describe('LocalStorageWorkerService', () => {
  let service: LocalStorageWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
