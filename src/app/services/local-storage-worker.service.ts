import { Injectable } from '@angular/core';
import { AuthDataInterface } from '../core/interfaces/auth-data.interface';
import { OffersDetailsInterface } from '../core/interfaces/offers-details.interface';
import { CampaignDetailsInterface } from '../core/interfaces/campaign-details.interface';
import { ApplicationsDetailsInterface } from '../core/interfaces/applications-details.interface';

const AUTH_DATA = 'a-data';
const OFFER_DATA = 'of-data';
const CAMPAIGN_DATA = 'ca-data';
const APPLICATION_DATA = 'ap-data';

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

  public setCampaignsData(campaignsData: CampaignDetailsInterface[]): void {
    localStorage.setItem(CAMPAIGN_DATA, JSON.stringify(campaignsData));
  }

  public setApplicationsData(applicationsData: ApplicationsDetailsInterface[]): void {
    localStorage.setItem(APPLICATION_DATA, JSON.stringify(applicationsData));
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

  public getCampaignsData(): CampaignDetailsInterface[] | null {
    const campaignsData = localStorage.getItem(CAMPAIGN_DATA);
    if (campaignsData) {
      return JSON.parse(campaignsData);
    }
    return null;
  }

  public getApplicationsData(): ApplicationsDetailsInterface[] | null {
    const applicationsData = localStorage.getItem(APPLICATION_DATA);
    if (applicationsData) {
      return JSON.parse(applicationsData);
    }
    return null;
  }

  public clearAuthData(): void {
    localStorage.removeItem(AUTH_DATA);
  }

  public clearOfferData(): void {
    localStorage.removeItem(OFFER_DATA);
  }

  public clearCampaignsData(): void {
    localStorage.removeItem(CAMPAIGN_DATA);
  }

  public clearApplicationsData(): void {
    localStorage.removeItem(APPLICATION_DATA);
  }
}
