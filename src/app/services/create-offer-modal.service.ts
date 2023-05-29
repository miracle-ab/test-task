import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY, Observable, catchError, map, take, throwError } from 'rxjs';
import { CreateOfferComponent } from '../shared/modals/create-offer/create-offer.component';
import { OffersDetailsInterface } from '../core/interfaces/offers-details.interface';
import { LocalStorageWorkerService } from './local-storage-worker.service';

@Injectable({
  providedIn: 'root',
})
export class CreateOfferModalService {
  private language: any;

  constructor(
    private dialog: MatDialog,
    private localStorageWorkerService: LocalStorageWorkerService
  ) {}

  public openCreateOfferModal(
    headlineName: string,
    savaBtnName: string,
    isUpdateModal: boolean,
    offerSingleData?: OffersDetailsInterface
  ): Observable<any> {
    const createOfferDialog = this.dialog.open(CreateOfferComponent, {
      data: {
        headlineName: headlineName,
        saveBtnName: savaBtnName,
        offerSingleData: offerSingleData,
        createUpdateoffer:
          isUpdateModal && offerSingleData
            ? (offerData: OffersDetailsInterface) =>
                this.updateOffer(offerData, offerSingleData.id)
            : (offerData: OffersDetailsInterface) =>
                this.createOffer(offerData),
      },
    });
    return createOfferDialog.afterClosed().pipe(take(1));
  }

  public createOffer(offerData: OffersDetailsInterface): void {
    let offerDataFromLocalStorage =
      this.localStorageWorkerService.getOfferData();
    if (offerDataFromLocalStorage) {
      let lastOfferItemId =
        offerDataFromLocalStorage[offerDataFromLocalStorage.length - 1].id;
      offerData.id = lastOfferItemId + 1;
      offerDataFromLocalStorage.push(offerData);
      this.localStorageWorkerService.setOfferData(offerDataFromLocalStorage);
    } else {
      offerData.id = 1;
      this.localStorageWorkerService.setOfferData([offerData]);
    }
  }

  public updateOffer(offerData: OffersDetailsInterface, offerId: number): void {
    let offerDataFromLocalStorage =
      this.localStorageWorkerService.getOfferData();
    let newOfferData = offerDataFromLocalStorage?.map((element) => {
      if (element.id === offerId) {
        element = {...offerData };
        element.id = offerId;
      }
      return element;
    });
    this.localStorageWorkerService.setOfferData(
      newOfferData ? newOfferData : []
    );
  }
}
