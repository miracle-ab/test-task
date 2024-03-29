import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/router-list';
import { ApplicationsLayoutComponent } from './components/applications-layout/applications-layout.component';

const routes: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    component: ApplicationsLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
