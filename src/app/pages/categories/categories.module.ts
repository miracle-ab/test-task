import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesLayoutComponent } from './components/categories-layout/categories-layout.component';


@NgModule({
  declarations: [
    CategoriesLayoutComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
