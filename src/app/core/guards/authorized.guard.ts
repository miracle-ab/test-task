import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTES } from '../constants/router-list';
import { LocalStorageWorkerService } from 'src/app/services/local-storage-worker.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private localStorageWorker: LocalStorageWorkerService
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthorized = !!this.localStorageWorker.getAuthData();
    if (isAuthorized) {
      return true;
    } else {
      this.router.navigate([ROUTES.AUTH_ROUTH]).then();
      return false;
    }
  }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate()
  }
  
}
