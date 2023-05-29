import { Component, OnInit } from '@angular/core';
import { OffersDetailsInterface } from 'src/app/core/interfaces/offers-details.interface';
import { CreateOfferModalService } from 'src/app/services/create-offer-modal.service';
import { LocalStorageWorkerService } from 'src/app/services/local-storage-worker.service';

@Component({
  selector: 'app-offers-layout',
  templateUrl: './offers-layout.component.html',
  styleUrls: ['./offers-layout.component.scss'],
})
export class OffersLayoutComponent implements OnInit {
  public tableData: OffersDetailsInterface[] = [];

  constructor(
    private createOfferModalService: CreateOfferModalService,
    private localStorageWorkerService: LocalStorageWorkerService
  ) {}

  ngOnInit(): void {
    this.getOffersList();
  }

  public createUpdateOfferModal(
    offerById?: OffersDetailsInterface,
    isUpdateModal?: boolean
  ): void {
    this.createOfferModalService
      .openCreateOfferModal(
        'Create offer',
        'Create',
        isUpdateModal ? isUpdateModal : false,
        offerById ? offerById : undefined
      )
      .subscribe((isRefreshList: boolean) => {
        if (isRefreshList) {
          this.getOffersList();
        }
      });
  }

  public updateOfferById(offerId: number): void {
    let offerItem = this.tableData.filter(
      (element) => element.id === offerId
    )[0];
    this.createUpdateOfferModal(offerItem, true);
  }

  public deleteOfferById(offerId: number): void {
    let newOfferData = this.tableData.filter(
      (element) => element.id !== offerId
    );
    this.localStorageWorkerService.setOfferData(
      newOfferData ? newOfferData : []
    );
    this.getOffersList();
  }

  private getOffersList(): void {
    let offerDataFromLocalStorage =
      this.localStorageWorkerService.getOfferData();
    this.tableData = offerDataFromLocalStorage ? offerDataFromLocalStorage : [];
  }
}
