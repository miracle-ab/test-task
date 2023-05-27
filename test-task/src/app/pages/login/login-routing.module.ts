import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/core/constants/router-list';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: ROUTES.MAIN_ROUTH,
    component: LoginLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
