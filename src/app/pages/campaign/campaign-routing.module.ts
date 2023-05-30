import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/router-list';
import { CampaignLayoutComponent } from './components/campaign-layout/campaign-layout.component';

const routes: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    component: CampaignLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
