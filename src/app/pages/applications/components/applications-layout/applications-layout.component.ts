import { Component, OnInit } from '@angular/core';
import { ApplicationsDetailsInterface } from 'src/app/core/interfaces/applications-details.interface';
import { CampaignDetailsInterface } from 'src/app/core/interfaces/campaign-details.interface';
import { CreateApplicationModalService } from 'src/app/services/create-application-modal.service';
import { LocalStorageWorkerService } from 'src/app/services/local-storage-worker.service';

@Component({
  selector: 'app-applications-layout',
  templateUrl: './applications-layout.component.html',
  styleUrls: ['./applications-layout.component.scss'],
})
export class ApplicationsLayoutComponent implements OnInit {
  public tableData: ApplicationsDetailsInterface[] = [];
  public campaigns: CampaignDetailsInterface[] | null = [];

  constructor(
    private createaApplicationModalService: CreateApplicationModalService,
    private localStorageWorkerService: LocalStorageWorkerService
  ) {}

  ngOnInit(): void {
    this.getCampaignsList();
    this.getApplicationList();
  }

  public createUpdateApplicationModal(
    campaignSingleItem?: ApplicationsDetailsInterface,
    isUpdateModal?: boolean
  ): void {
    this.createaApplicationModalService
      .openCreateApplicationModal(
        'Create application',
        'Create',
        isUpdateModal ? isUpdateModal : false,
        this.campaigns ? this.campaigns : [],
        campaignSingleItem ? campaignSingleItem : undefined
      )
      .subscribe((isRefreshList: boolean) => {
        if (isRefreshList) {
          this.getApplicationList();
        }
      });
  }

  public updateApplicationById(campaignId: any): void {
    let campaignItem = this.tableData.filter(
      (element) => element.id === campaignId
    )[0];
    this.createUpdateApplicationModal(campaignItem, true);
  }

  public deleteApplicationById(campaignId: any): void {
    let newApplicationData = this.tableData.filter(
      (element) => element.id !== campaignId
    );
    this.localStorageWorkerService.setApplicationsData(
      newApplicationData ? newApplicationData : []
    );
    this.getApplicationList();
  }

  private getApplicationList(): void {
    let applicationDataFromLocalStorage =
      this.localStorageWorkerService.getApplicationsData();
    this.tableData = applicationDataFromLocalStorage
      ? applicationDataFromLocalStorage
      : [];
  }

  private getCampaignsList(): void {
    this.campaigns = this.localStorageWorkerService.getCampaignsData()
      ? this.localStorageWorkerService.getCampaignsData()
      : [];
  }
}
