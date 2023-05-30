import { Injectable } from '@angular/core';
import { CampaignDetailsInterface } from '../core/interfaces/campaign-details.interface';
import { Observable, take } from 'rxjs';
import { CreateCampaignComponent } from '../shared/modals/create-campaign/create-campaign.component';
import { LocalStorageWorkerService } from './local-storage-worker.service';
import { MatDialog } from '@angular/material/dialog';
import { OffersDetailsInterface } from '../core/interfaces/offers-details.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateCampaignModalService {

  constructor(
    private dialog: MatDialog,
    private localStorageWorkerService: LocalStorageWorkerService
  ) {}

  public openCreateCampaignModal(
    headlineName: string,
    savaBtnName: string,
    isUpdateModal: boolean,
    offers: OffersDetailsInterface[],
    campaignSingleItem?: CampaignDetailsInterface
  ): Observable<any> {
    const createCampaignDialog = this.dialog.open(CreateCampaignComponent, {
      data: {
        headlineName: headlineName,
        saveBtnName: savaBtnName,
        offers: offers,
        campaignSingleItem: campaignSingleItem,
        createUpdateCampaign:
          isUpdateModal && campaignSingleItem
            ? (categoryData: CampaignDetailsInterface) =>
                this.updateCampaign(categoryData, campaignSingleItem.id)
            : (categoryData: CampaignDetailsInterface) =>
                this.createCampaign(categoryData),
      },
    });
    return createCampaignDialog.afterClosed().pipe(take(1));
  }

  public createCampaign(categoryData: CampaignDetailsInterface): void {
    let categoryDataFromLocalStorage =
      this.localStorageWorkerService.getCampaignsData();
    if (categoryDataFromLocalStorage) {
      let lastcategoryItemId =
        categoryDataFromLocalStorage[categoryDataFromLocalStorage.length - 1]
          .id;
      categoryData.id = lastcategoryItemId + 1;
      categoryDataFromLocalStorage.push(categoryData);
      this.localStorageWorkerService.setCampaignsData(
        categoryDataFromLocalStorage
      );
    } else {
      categoryData.id = 1;
      this.localStorageWorkerService.setCampaignsData([categoryData]);
    }
  }

  public updateCampaign(
    categoryData: CampaignDetailsInterface,
    categoryId: number
  ): void {
    let categoryDataFromLocalStorage =
      this.localStorageWorkerService.getCampaignsData();
    let newcategoryData = categoryDataFromLocalStorage?.map((element) => {
      if (element.id === categoryId) {
        element = { ...categoryData };
        element.id = categoryId;
      }
      return element;
    });
    this.localStorageWorkerService.setCampaignsData(
      newcategoryData ? newcategoryData : []
    );
  }
}
