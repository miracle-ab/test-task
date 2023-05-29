import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotAuthorizedGuard } from './core/guards/not-authorized.guard';
import { AuthorizedGuard } from './core/guards/authorized.guard';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeLayoutComponent, AuthLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    SharedModule
  ],
  providers: [NotAuthorizedGuard, AuthorizedGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
