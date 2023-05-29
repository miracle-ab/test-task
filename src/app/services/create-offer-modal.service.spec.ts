import { TestBed } from '@angular/core/testing';

import { CreateOfferModalService } from './create-offer-modal.service';

describe('CreateOfferModalService', () => {
  let service: CreateOfferModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateOfferModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
