import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './screens/auth/signin/signin.component';
import { SignupComponent } from './screens/auth/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatDrawerContainer, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatNavList, MatPaginatorModule, MatRadioModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatTabGroup, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FirstpageComponent } from './screens/front/firstpage/firstpage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecondComponent } from './screens/front/second/second.component';
import { AddBuildingComponent } from './screens/front/second/dailog/add-building/add-building.component';
import { DepartmentComponent } from './screens/front/second/department/department.component';
import { BuidingComponent } from './screens/front/second/buiding/buiding.component';
import { LocationComponent } from './screens/front/second/location/location.component';
import { AddDepartmentComponent } from './screens/front/second/dailog/add-department/add-department.component';
import { AddLocationComponent } from './screens/front/second/dailog/add-location/add-location.component';
import { UserComponent } from './screens/front/second/user/user.component';
import { AddUserComponent } from './screens/front/second/dailog/add-user/add-user.component';
import { ThirdComponent } from './screens/front/third/third.component';
import { AssetComponent } from './screens/front/third/asset/asset.component';
import { AddAssetDailogComponent } from './screens/front/third/dailog/add-asset-dailog/add-asset-dailog.component';
import { AddCustomFieldComponent } from './screens/front/third/dailog/add-custom-field/add-custom-field.component';
import { DataCapturedComponent } from './screens/front/third/data-captured/data-captured.component';
import { DashboardComponent } from './screens/front/dashboard/dashboard.component';
import { CardDashboardComponent } from './screens/front/dashboard/mainpage/card-dashboard/card-dashboard.component';
import { GraphDashboardComponent } from './screens/front/dashboard/mainpage/graph-dashboard/graph-dashboard.component';
import { AlertsDashboardComponent } from './screens/front/dashboard/mainpage/alerts-dashboard/alerts-dashboard.component';
import { AssetsComponent } from './screens/front/assets/assets.component';
import { AssetsHeaderComponent } from './screens/front/assets/assets-mainpage/assets-header/assets-header.component';
import { AssetsCardComponent } from './screens/front/assets/assets-mainpage/assets-card/assets-card.component';
import { AssetsFilterComponent } from './screens/front/assets/assets-mainpage/assets-filter/assets-filter.component';
import { AssetsTableComponent } from './screens/front/assets/assets-mainpage/assets-table/assets-table.component';
import { AddNewAssetComponent } from './screens/front/assets/add-new-asset/add-new-asset.component';
import { AddmainComponent } from './screens/front/assets/add-new-asset/addmain/addmain.component';
import { AssetBasicComponent } from './screens/front/assets/add-new-asset/addmain/asset-basic/asset-basic.component';
import { AssetWarrantyComponent } from './screens/front/assets/add-new-asset/addmain/asset-warranty/asset-warranty.component';
import { AssetAllocateComponent } from './screens/front/assets/add-new-asset/addmain/asset-allocate/asset-allocate.component';
import { AssetMaintainanceComponent } from './screens/front/assets/add-new-asset/addmain/asset-maintainance/asset-maintainance.component';
import { AssetInsuranceComponent } from './screens/front/assets/add-new-asset/addmain/asset-insurance/asset-insurance.component';
import { AssetLicenseComponent } from './screens/front/assets/add-new-asset/addmain/asset-license/asset-license.component';
import { AssetLeasingComponent } from './screens/front/assets/add-new-asset/addmain/asset-leasing/asset-leasing.component';
import { AssetDepreciationComponent } from './screens/front/assets/add-new-asset/addmain/asset-depreciation/asset-depreciation.component';
import { AssetDetailsComponent } from './screens/front/assetdetails/assetdetails.component';
import { AssetinformationComponent } from './screens/front/assetdetails/assetinformation/assetinformation.component';
import { AllocationinformationComponent } from './screens/front/assetdetails/allocationinformation/allocationinformation.component';
import { RightcontentComponent } from './screens/front/assetdetails/rightcontent/rightcontent.component';
import { BottomcontentComponent } from './screens/front/assetdetails/bottomcontent/bottomcontent.component';
import { InsuranceComponent } from './screens/front/assetdetails/bottomcontent/insurance/insurance.component';
import { MaintainanceComponent } from './screens/front/assetdetails/bottomcontent/maintainance/maintainance.component';
import { DepreciationComponent } from './screens/front/assetdetails/bottomcontent/depreciation/depreciation.component';
import { ReservationComponent } from './screens/front/assetdetails/bottomcontent/reservation/reservation.component';
import { ChangehistoryComponent } from './screens/front/assetdetails/bottomcontent/changehistory/changehistory.component';
import { MaintainancescheduleComponent } from './screens/front/maintainanceschedule/maintainanceschedule.component';
import { AssetselectionComponent } from './screens/front/maintainanceschedule/assetselection/assetselection.component';
import { MaintainancesettingComponent } from './screens/front/maintainanceschedule/maintainancesetting/maintainancesetting.component';
import { MaintainanceassetComponent } from './screens/front/maintainanceschedule/maintainanceasset/maintainanceasset.component';
import { AssetReservationComponent } from './screens/front/asset-reservation/asset-reservation.component';
import { AssetReservationSelectionComponent } from './screens/front/asset-reservation/asset-reservation-selection/asset-reservation-selection.component';
import { AssetReservationSettingComponent } from './screens/front/asset-reservation/asset-reservation-setting/asset-reservation-setting.component';
import { AssetReservationTableComponent } from './screens/front/asset-reservation/asset-reservation-table/asset-reservation-table.component';
import { BulkAssetMovingComponent } from './screens/front/bulk-asset-moving/bulk-asset-moving.component';
import { MovingAssetSelectionComponent } from './screens/front/bulk-asset-moving/moving-asset-selection/moving-asset-selection.component';
import { MovingAssetMovetoComponent } from './screens/front/bulk-asset-moving/moving-asset-moveto/moving-asset-moveto.component';
import { MovingAssettableComponent } from './screens/front/bulk-asset-moving/moving-assettable/moving-assettable.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    FirstpageComponent,
    SecondComponent,
    AddBuildingComponent,
    DepartmentComponent,
    BuidingComponent,
    LocationComponent,
    AddDepartmentComponent,
    AddLocationComponent,
    UserComponent,
    AddUserComponent,
    ThirdComponent,
    AssetComponent,
    AddAssetDailogComponent,
    AddCustomFieldComponent,
    DataCapturedComponent,
    DashboardComponent,
    CardDashboardComponent,
    GraphDashboardComponent,
    AlertsDashboardComponent,
    AssetsComponent,
    AssetsHeaderComponent,
    AssetsCardComponent,
    AssetsFilterComponent,
    AssetsTableComponent,
    AddNewAssetComponent,
    AddmainComponent,
    AssetBasicComponent,
    AssetWarrantyComponent,
    AssetAllocateComponent,
    AssetMaintainanceComponent,
    AssetInsuranceComponent,
    AssetLicenseComponent,
    AssetLeasingComponent,
    AssetDepreciationComponent,
    AssetInsuranceComponent,
    AssetDetailsComponent,
    AssetinformationComponent,
    AllocationinformationComponent,
    RightcontentComponent,
    BottomcontentComponent,
    InsuranceComponent,
    MaintainanceComponent,
    DepreciationComponent,
    ReservationComponent,
    ChangehistoryComponent,
    MaintainancescheduleComponent,
    AssetselectionComponent,
    MaintainancesettingComponent,
    MaintainanceassetComponent,
    AssetReservationComponent,
    AssetReservationSelectionComponent,
    AssetReservationSettingComponent,
    AssetReservationTableComponent,
    BulkAssetMovingComponent,
    MovingAssetSelectionComponent,
    MovingAssetMovetoComponent,
    MovingAssettableComponent
  ],
  entryComponents: [AddBuildingComponent, AddDepartmentComponent, AddLocationComponent, AddUserComponent, AddAssetDailogComponent, AddCustomFieldComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatTabGroup
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
