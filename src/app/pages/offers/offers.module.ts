import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersLayoutComponent } from './components/offers-layout/offers-layout.component';
import { OffersListTableComponent } from './components/offers-list-table/offers-list-table.component';


@NgModule({
  declarations: [
    OffersLayoutComponent,
    OffersListTableComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
