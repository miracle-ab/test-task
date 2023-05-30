import { Injectable } from '@angular/core';
import { ApplicationsDetailsInterface } from '../core/interfaces/applications-details.interface';
import { Observable, take } from 'rxjs';
import { LocalStorageWorkerService } from './local-storage-worker.service';
import { MatDialog } from '@angular/material/dialog';
import { CampaignDetailsInterface } from '../core/interfaces/campaign-details.interface';
import { CreateApplicationComponent } from '../shared/modals/create-application/create-application.component';

@Injectable({
  providedIn: 'root',
})
export class CreateApplicationModalService {
  constructor(
    private dialog: MatDialog,
    private localStorageWorkerService: LocalStorageWorkerService
  ) {}

  public openCreateApplicationModal(
    headlineName: string,
    savaBtnName: string,
    isUpdateModal: boolean,
    campaigns: CampaignDetailsInterface[],
    applicationSingleItem?: ApplicationsDetailsInterface
  ): Observable<any> {
    const createApplicationDialog = this.dialog.open(
      CreateApplicationComponent,
      {
        data: {
          headlineName: headlineName,
          saveBtnName: savaBtnName,
          campaigns: campaigns,
          applicationSingleItem: applicationSingleItem,
          createUpdateApplication:
            isUpdateModal && applicationSingleItem
              ? (applicationData: ApplicationsDetailsInterface) =>
                  this.updateApplication(
                    applicationData,
                    applicationSingleItem.id
                  )
              : (applicationData: ApplicationsDetailsInterface) =>
                  this.createApplication(applicationData),
        },
      }
    );
    return createApplicationDialog.afterClosed().pipe(take(1));
  }

  public createApplication(
    applicationData: ApplicationsDetailsInterface
  ): void {
    let applicationDataFromLocalStorage =
      this.localStorageWorkerService.getApplicationsData();
    if (applicationDataFromLocalStorage) {
      let lastcategoryItemId =
        applicationDataFromLocalStorage[
          applicationDataFromLocalStorage.length - 1
        ].id;
      applicationData.id = lastcategoryItemId + 1;
      applicationDataFromLocalStorage.push(applicationData);
      this.localStorageWorkerService.setApplicationsData(
        applicationDataFromLocalStorage
      );
    } else {
      applicationData.id = 1;
      this.localStorageWorkerService.setApplicationsData([applicationData]);
    }
  }

  public updateApplication(
    applicationData: ApplicationsDetailsInterface,
    applicationId: number
  ): void {
    let applicationDataFromLocalStorage =
      this.localStorageWorkerService.getApplicationsData();
    let newapplicationData = applicationDataFromLocalStorage?.map((element) => {
      if (element.id === applicationId) {
        element = { ...applicationData };
        element.id = applicationId;
      }
      return element;
    });
    this.localStorageWorkerService.setApplicationsData(
      newapplicationData ? newapplicationData : []
    );
  }
}
