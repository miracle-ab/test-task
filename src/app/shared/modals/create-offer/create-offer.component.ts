import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { OffersDetailsInterface } from 'src/app/core/interfaces/offers-details.interface';
import { RegistrationIconService } from 'src/app/services/registration-icon.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss'],
})
export class CreateOfferComponent implements OnInit {
  public offersForm: FormGroup = new FormGroup({});

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,
    private registrationIcon: RegistrationIconService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      headlineName: string;
      saveBtnName: string;
      offerSingleData?: OffersDetailsInterface;
      createUpdateoffer: (offerData: OffersDetailsInterface) => void;
    }
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.offersForm = new FormGroup({
      title: new FormControl(
        this.data.offerSingleData?.title
          ? this.data.offerSingleData?.title
          : '',
        [Validators.required]
      ),
      website: new FormControl(
        this.data.offerSingleData?.website
          ? this.data.offerSingleData?.website
          : '',
        [Validators.required]
      ),
      payment: new FormControl(
        this.data.offerSingleData?.payment
          ? this.data.offerSingleData?.payment
          : 0,
        [Validators.required]
      ),
    });
  }

  public closeModal(newOffer?: boolean): void {
    if (newOffer) {
      this.dialogRef.close(newOffer);
    } else {
      this.dialogRef.close(false);
    }
  }

  public createUpdateoffer(): void {
    let offerData = this.offersForm.value;
    this.data.createUpdateoffer(offerData);
    this.closeModal(true);
  }
}
