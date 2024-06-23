import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyaccountsComponent } from './components/myaccounts/myaccounts.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { TransationHistoryComponent } from './components/transation-history/transation-history.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyaccountsComponent,
    AccountDetailsComponent,
    TransationHistoryComponent,
    HomeComponent,
    AdminDashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
