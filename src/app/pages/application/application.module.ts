import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationLayoutComponent } from './components/application-layout/application-layout.component';


@NgModule({
  declarations: [
    ApplicationLayoutComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
