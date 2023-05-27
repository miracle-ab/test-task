import { Injectable } from '@angular/core';
import { AuthDataInterface } from '../core/interface/auth-data.interface';

const AUTH_DATA = 'a-data';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageWorkerService {
  constructor() {}

  public setAuthData(authData: AuthDataInterface): void {
    localStorage.setItem(AUTH_DATA, JSON.stringify(authData));
  }

  public getAuthData(): string | null {
    const authData = localStorage.getItem(AUTH_DATA);
    if (authData) {
      return JSON.parse(authData);
    }
    return null;
  }

  public clearAuthData(): void {
    localStorage.removeItem(AUTH_DATA);
  }
}
