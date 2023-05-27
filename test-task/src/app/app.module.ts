import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotAuthorizedGuard } from './core/guards/not-authorized.guard';
import { AuthorizedGuard } from './core/guards/authorized.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    NotAuthorizedGuard,
    AuthorizedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
