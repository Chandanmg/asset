import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddAssetMainPage } from './addnewasset.model';
import { addNewAssetService } from './addnewasset.service';



interface AssetType {
  value: string;
  viewValue: string;
}

interface Allocate {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-addmain',
  templateUrl: './addmain.component.html',
  styleUrls: ['./addmain.component.scss'],
})
export class AddmainComponent implements OnInit {
  private assetSub: Subscription;
  private buildingSub: Subscription;
  
  private postUpdated = new Subject<AddAssetMainPage[]>();

  assettype: AddAssetMainPage[] = [];
  allocatetobuilding: AddAssetMainPage[] = [];
  allocatetodepartment: AddAssetMainPage[] = [];
  allocatetolocation: AddAssetMainPage[] = [];
  allocatetoperson: AddAssetMainPage[] = [];

  // assettype: AssetType[] ;

  // tobuilding: Allocate[] = [
  //   {value: 'building1', viewValue: 'Building 1'},
  //   {value: 'building2', viewValue: 'Building 2'},
  //   {value: 'building3', viewValue: 'Building 3'},
  // ];

  // todepartment: Allocate[] = [
  //   {value: 'department1', viewValue: 'Department 1'},
  //   {value: 'department2', viewValue: 'Department 2'},
  //   {value: 'department3', viewValue: 'Department 3'},
  // ];

  // tolocation: Allocate[] = [
  //   {value: 'location1', viewValue: 'Location 1'},
  //   {value: 'location2', viewValue: 'Location 2'},
  //   {value: 'location3', viewValue: 'Location 3'},
  // ];

  // toperson: Allocate[] = [
  //   {value: 'person1', viewValue: 'Person 1'},
  //   {value: 'person2', viewValue: 'Person 2'},
  //   {value: 'person3', viewValue: 'Person 3'},
  // ];
  // seatData: any[];

  constructor(public addnewassetservice: addNewAssetService, private http: HttpClient) { }

  ngOnInit(){
    // this.clickMe();
    this.getAssets();
    this.getBuilding();
    this.getDepartment();
    this.getLocation();
    this.getPerson();
  }

  // clickMe(){
  //   this.addnewassetservice.getAssetType();
  //   this.assetSub = this.addnewassetservice.getPostUpdateListener()
  //     .subscribe((posts: AddAssetMainPage[]) => {
  //       this.assettype = posts;
  //       // console.log(posts)
  //     });
  // }

  getAssets() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              assettype: post.name,
          }
      })
    }))
    .subscribe(post => {
        this.assettype = post,
        // console.log(post);
        
        this.postUpdated.next([...this.assettype])
    })
  }

  getBuilding(){
    this.http.get<{message:string, posts: any}>('http://localhost:3000/addbuilding')
    .pipe(map((buildData)=>{
      return buildData.posts.map(post => {
          return {
              // id: post._id,
              allocatetobuilding: post.name,
          }
      })
    }))
    .subscribe(post => {
        this.allocatetobuilding = post,
        // console.log(post);
        
        this.postUpdated.next([...this.allocatetobuilding])
    })
  }

  getDepartment(){
    this.http.get<{message:string, posts: any}>('http://localhost:3000/addDepartment')
    .pipe(map((depData)=>{
      return depData.posts.map(post => {
          return {
              // id: post._id,
              allocatetodepartment: post.name,
          }
      })
    }))
    .subscribe(post => {
        this.allocatetodepartment = post,
        // console.log(post);
        
        this.postUpdated.next([...this.allocatetodepartment])
    })
  }

  getLocation(){
    this.http.get<{message:string, posts: any}>('http://localhost:3000/addLocation')
    .pipe(map((locData)=>{
      return locData.posts.map(post => {
          return {
              // id: post._id,
              allocatetolocation: post.name,
          }
      })
    }))
    .subscribe(post => {
        this.allocatetolocation = post,
        // console.log(post);
        
        this.postUpdated.next([...this.allocatetolocation])
    })
  }

  getPerson(){
    this.http.get<{message:string, posts: any}>('http://localhost:3000/addUser')
    .pipe(map((perData)=>{
      return perData.posts.map(post => {
          return {
              // id: post._id,
              allocatetoperson: post.name,
          }
      })
    }))
    .subscribe(post => {
        this.allocatetoperson = post,
        // console.log(post);
        
        this.postUpdated.next([...this.allocatetoperson])
    })
  }

  addNewAsset(form: NgForm){
    if(form.invalid){
      return
    }
    console.log(form.value);
    this.addnewassetservice.addAsset(
      form.value.assetname, 
      form.value.assetserial, 
      form.value.basiccost, 
      form.value.basicbrand, 
      form.value.assettype, 
      form.value.purchasedate, 
      form.value.basicvendorname, 
      form.value.basicassetmodel,

       
      form.value.warduedate,
      form.value.warrentyexpiryreminder,
      form.value.warnotifyto,

      form.value.allocatetobuilding,
      form.value.allocatetodepartment,
      form.value.allocatetolocation,
      form.value.allocatetoperson,

      form.value.maintenancedue,
      form.value.maintainancereminder,
      form.value.maintainancenotifyto,
      form.value.insurancenumber,
      form.value.insurancedue,
      form.value.insurancevendor,
      form.value.insurancenotifyto,
      form.value.insurancereminder,
      form.value.insuranceinsuredvalue,

      form.value.licencenumber,
      form.value.licencedate,
      form.value.licensenotify,
      form.value.licencereminder,

      form.value.leasestartdate,
      form.value.leaseenddate,
      form.value.leasenotify,
      form.value.leasedfrom,

      form.value.depreciablecost,
      form.value.depreciablesalvationvalue,
      form.value.depreciablebegindate,
      form.value.depreciableassetlife,
      form.value.depreciablemethod

    );
  }

  onBack(){
    console.log("came")
  }

}
