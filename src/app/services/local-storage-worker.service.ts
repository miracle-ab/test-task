import { Injectable } from '@angular/core';
import { AuthDataInterface } from '../core/interfaces/auth-data.interface';
import { OffersDetailsInterface } from '../core/interfaces/offers-details.interface';

const AUTH_DATA = 'a-data';
const OFFER_DATA = 'of-data';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageWorkerService {
  constructor() {}

  public setAuthData(authData: AuthDataInterface): void {
    localStorage.setItem(AUTH_DATA, JSON.stringify(authData));
  }

  public setOfferData(offerData: OffersDetailsInterface[]): void {
    localStorage.setItem(OFFER_DATA, JSON.stringify(offerData));
  }

  public getAuthData(): string | null {
    const authData = localStorage.getItem(AUTH_DATA);
    if (authData) {
      return JSON.parse(authData);
    }
    return null;
  }

  public getOfferData(): OffersDetailsInterface[] | null {
    const offerData = localStorage.getItem(OFFER_DATA);
    if (offerData) {
      return JSON.parse(offerData);
    }
    return null;
  }

  public clearAuthData(): void {
    localStorage.removeItem(AUTH_DATA);
  }

  public clearOfferData(): void {
    localStorage.removeItem(OFFER_DATA);
  }
}
