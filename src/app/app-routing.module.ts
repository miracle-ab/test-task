import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './core/constants/router-list';
import { NotAuthorizedGuard } from './core/guards/not-authorized.guard';
import { AuthorizedGuard } from './core/guards/authorized.guard';
import { ApplicationLayoutComponent } from './pages/application/components/application-layout/application-layout.component';

const routes: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    component: ApplicationLayoutComponent,
    canActivate: [AuthorizedGuard],
    loadChildren: () =>
      import('./pages/application/application.module').then((m) => m.ApplicationModule),
  },
  {
    path: `${ROUTES.AUTH_ROUTH}`,
    canActivate: [NotAuthorizedGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
