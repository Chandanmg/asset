import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './screens/auth/signin/signin.component';
import { SignupComponent } from './screens/auth/signup/signup.component';
import { AssetReservationComponent } from './screens/front/asset-reservation/asset-reservation.component';
import { AssetDetailsComponent} from './screens/front/assetdetails/assetdetails.component';
import { AddNewAssetComponent } from './screens/front/assets/add-new-asset/add-new-asset.component';
import { AssetsComponent } from './screens/front/assets/assets.component';
import { BulkAssetMovingComponent } from './screens/front/bulk-asset-moving/bulk-asset-moving.component';
import { DashboardComponent } from './screens/front/dashboard/dashboard.component';
import { FirstpageComponent } from './screens/front/firstpage/firstpage.component';
import { MaintainancescheduleComponent } from './screens/front/maintainanceschedule/maintainanceschedule.component';
import { SecondComponent } from './screens/front/second/second.component';
import { ThirdComponent } from './screens/front/third/third.component';


const routes: Routes = [
  { path: '', component: SigninComponent },
  // { path: 'signup', component: SignupComponent },
  { path: 'firstpage', component: FirstpageComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '', component: DashboardComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'addnewassets', component: AddNewAssetComponent },
  { path: 'adddetails', component: AssetDetailsComponent },
  { path: 'maintainanceschedule', component: MaintainancescheduleComponent},
  // { path: 'assetreservation', component: AssetReservationComponent},
  { path: 'bulkassetmoving', component: BulkAssetMovingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
