import { Component, OnInit } from '@angular/core';
import { CampaignDetailsInterface } from 'src/app/core/interfaces/campaign-details.interface';
import { OffersDetailsInterface } from 'src/app/core/interfaces/offers-details.interface';
import { CreateCampaignModalService } from 'src/app/services/create-campaign-modal.service';
import { LocalStorageWorkerService } from 'src/app/services/local-storage-worker.service';

@Component({
  selector: 'app-categories-layout',
  templateUrl: './campaign-layout.component.html',
  styleUrls: ['./campaign-layout.component.scss'],
})
export class CampaignLayoutComponent implements OnInit {
  public tableData: CampaignDetailsInterface[] = [];
  public offers: OffersDetailsInterface[] | null = [];

  constructor(
    private createCampaignModalService: CreateCampaignModalService,
    private localStorageWorkerService: LocalStorageWorkerService
  ) {}

  ngOnInit(): void {
    this.getOffersList();
    this.getCampaignList();
  }

  public createUpdateCampaignModal(
    campaignSingleItem?: CampaignDetailsInterface,
    isUpdateModal?: boolean
  ): void {
    this.createCampaignModalService
      .openCreateCampaignModal(
        'Create Campaign',
        'Create',
        isUpdateModal ? isUpdateModal : false,
        this.offers ? this.offers : [],
        campaignSingleItem ? campaignSingleItem : undefined
      )
      .subscribe((isRefreshList: boolean) => {
        if (isRefreshList) {
          this.getCampaignList();
        }
      });
  }

  public updateCampaignById(campaignId: any): void {
    let campaignItem = this.tableData.filter(
      (element) => element.id === campaignId
    )[0];
    this.createUpdateCampaignModal(campaignItem, true);
  }

  public deleteCampaignById(campaignId: any): void {
    let newCampaignData = this.tableData.filter(
      (element) => element.id !== campaignId
    );
    this.localStorageWorkerService.setCampaignsData(
      newCampaignData ? newCampaignData : []
    );
    this.getCampaignList();
  }

  private getCampaignList(): void {
    let categoryDataFromLocalStorage =
      this.localStorageWorkerService.getCampaignsData();
    this.tableData = categoryDataFromLocalStorage
      ? categoryDataFromLocalStorage
      : [];
  }

  private getOffersList(): void {
    this.offers = this.localStorageWorkerService.getOfferData()
      ? this.localStorageWorkerService.getOfferData()
      : [];
  }
}
