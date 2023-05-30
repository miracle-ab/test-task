import { TestBed } from '@angular/core/testing';
import { CreateCampaignModalService } from './create-campaign-modal.service';


describe('CreateCampaignModalService', () => {
  let service: CreateCampaignModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCampaignModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
