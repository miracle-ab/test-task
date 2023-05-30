import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants/router-list';
import { NotAuthorizedGuard } from './core/guards/not-authorized.guard';
import { AuthorizedGuard } from './core/guards/authorized.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: ROUTES.AUTH_ROUTH,
    component: AuthLayoutComponent,
    canActivate: [NotAuthorizedGuard],
    children: [
      {
        path: ROUTES.MAIN_ROUTH,
        redirectTo: ROUTES.LOGIN_ROUTH,
        pathMatch: 'full',
      },
      {
        path: ROUTES.LOGIN_ROUTH,
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: ROUTES.MAIN_ROUTH,
    component: HomeLayoutComponent,
    canActivate: [AuthorizedGuard],
    children: [
      {
        path: ROUTES.MAIN_ROUTH,
        redirectTo: ROUTES.OFFERS_ROUTH,
        pathMatch: 'full',
      },
      {
        path: ROUTES.OFFERS_ROUTH,
        loadChildren: () =>
          import('./pages/offers/offers.module').then((m) => m.OffersModule),
      },
      {
        path: ROUTES.CAMPAIGN_ROUTH,
        loadChildren: () =>
          import('./pages/campaign/campaign.module').then(
            (m) => m.CampaignModule
          ),
      },
      {
        path: ROUTES.APPLICATIONS_ROUTH,
        loadChildren: () =>
          import('./pages/applications/applications.module').then(
            (m) => m.ApplicationsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
