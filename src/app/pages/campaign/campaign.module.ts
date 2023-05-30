import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CampaignListTableComponent } from './components/campaign-list-table/campaign-list-table.component';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignLayoutComponent } from './components/campaign-layout/campaign-layout.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    CampaignLayoutComponent,
    CampaignListTableComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule
  ]
})
export class CampaignModule { }
