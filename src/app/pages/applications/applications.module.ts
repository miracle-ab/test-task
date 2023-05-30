import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsLayoutComponent } from './components/applications-layout/applications-layout.component';
import { ApplicationsListTableComponent } from './components/applications-list-table/applications-list-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    ApplicationsLayoutComponent,
    ApplicationsListTableComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule
  ]
})
export class ApplicationsModule { }
