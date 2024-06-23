import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { MyaccountsComponent } from './components/myaccounts/myaccounts.component';
import { TransationHistoryComponent } from './components/transation-history/transation-history.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'account-details',component:AccountDetailsComponent},
  {path:'myaccounts',component:MyaccountsComponent},
  {path:'transation-history',component:TransationHistoryComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'profile',component:ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
