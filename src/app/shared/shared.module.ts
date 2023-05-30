import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './modals/create-offer/create-offer.component';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateCampaignComponent } from './modals/create-campaign/create-campaign.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CreateApplicationComponent } from './modals/create-application/create-application.component';



@NgModule({
  declarations: [
    CreateOfferComponent,
    ModalWrapperComponent,
    CreateCampaignComponent,
    CreateApplicationComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class SharedModule { }
