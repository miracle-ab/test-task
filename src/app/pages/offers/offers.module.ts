import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersLayoutComponent } from './components/offers-layout/offers-layout.component';
import { OffersListTableComponent } from './components/offers-list-table/offers-list-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [OffersLayoutComponent, OffersListTableComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class OffersModule {}
