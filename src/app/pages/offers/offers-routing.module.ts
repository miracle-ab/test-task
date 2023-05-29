import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/router-list';
import { OffersLayoutComponent } from './components/offers-layout/offers-layout.component';

const routes: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    component: OffersLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}
