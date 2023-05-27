import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageWorkerService } from 'src/app/services/local-storage-worker.service';
import { ROUTES } from '../constants/router-list';

@Injectable({
  providedIn: 'root',
})
export class NotAuthorizedGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageWorker: LocalStorageWorkerService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = !!this.localStorageWorker.getAuthData();

    if (!isAuthorized) {
      return true;
    } else {
      this.router.navigate([ROUTES.MAIN_ROUTH]).then();
      return false;
    }
  }
}
