import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { CampaignDetailsInterface } from 'src/app/core/interfaces/campaign-details.interface';
import { OffersDetailsInterface } from 'src/app/core/interfaces/offers-details.interface';
import { RegistrationIconService } from 'src/app/services/registration-icon.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
})
export class CreateCampaignComponent implements OnInit {
  public campaignForm: FormGroup = new FormGroup({});

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,
    private registrationIcon: RegistrationIconService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      headlineName: string;
      saveBtnName: string;
      offers: OffersDetailsInterface[];
      campaignSingleItem?: CampaignDetailsInterface;
      createUpdateCampaign: (
        campaignData: CampaignDetailsInterface
      ) => void;
    }
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.campaignForm = new FormGroup({
      title: new FormControl(
        this.data.campaignSingleItem?.title
          ? this.data.campaignSingleItem?.title
          : '',
        [Validators.required]
      ),
      linkToOffers: new FormControl(
        this.data.campaignSingleItem?.linkToOffers
          ? this.data.campaignSingleItem?.linkToOffers
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

  public createUpdateCampaign(): void {
    let campaignData = this.campaignForm.value;
    this.data.createUpdateCampaign(campaignData);
    this.closeModal(true);
  }
}
