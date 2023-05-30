import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApplicationsDetailsInterface } from 'src/app/core/interfaces/applications-details.interface';
import { CampaignDetailsInterface } from 'src/app/core/interfaces/campaign-details.interface';
import { RegistrationIconService } from 'src/app/services/registration-icon.service';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss'],
})
export class CreateApplicationComponent implements OnInit {
  public applicationForm: FormGroup = new FormGroup({});
  public isActiveValues: boolean[] = [true, false];

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,
    private registrationIcon: RegistrationIconService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      headlineName: string;
      saveBtnName: string;
      campaigns: CampaignDetailsInterface[];
      applicationSingleItem?: ApplicationsDetailsInterface;
      createUpdateApplication: (applicationData: ApplicationsDetailsInterface) => void;
    }
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.applicationForm = new FormGroup({
      title: new FormControl(
        this.data.applicationSingleItem?.title
          ? this.data.applicationSingleItem?.title
          : '',
        [Validators.required]
      ),
      isActive: new FormControl(
        this.data.applicationSingleItem?.isActive
          ? this.data.applicationSingleItem?.isActive
          : '',
        [Validators.required]
      ),
      linkToCampaigns: new FormControl(
        this.data.applicationSingleItem?.linkToCampaigns
          ? this.data.applicationSingleItem?.linkToCampaigns
          : '',
        [Validators.required]
      ),
      description: new FormControl(
        this.data.applicationSingleItem?.description
          ? this.data.applicationSingleItem?.description
          : '',
        [Validators.required]
      ),
      version: new FormControl(
        this.data.applicationSingleItem?.version
          ? this.data.applicationSingleItem?.version
          : '',
        [Validators.required]
      ),
    });
  }

  public closeModal(newCampaign?: boolean): void {
    if (newCampaign) {
      this.dialogRef.close(newCampaign);
    } else {
      this.dialogRef.close(false);
    }
  }

  public createUpdateApplication(): void {
    let campaignData = this.applicationForm.value;
    this.data.createUpdateApplication(campaignData);
    this.closeModal(true);
  }
}
