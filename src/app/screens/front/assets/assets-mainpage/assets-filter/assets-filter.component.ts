import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddAssetMainPage } from '../../add-new-asset/addmain/addnewasset.model';

interface Allocate {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-assets-filter',
  templateUrl: './assets-filter.component.html',
  styleUrls: ['./assets-filter.component.scss']
})

export class AssetsFilterComponent implements OnInit {

  private postUpdated = new Subject<AddAssetMainPage[]>();

  // cost : number[] = [];

  filterAssetName: AddAssetMainPage[] = [];
  filterAssetType: AddAssetMainPage[] = [];
  filterAssetPurchaseDate: AddAssetMainPage[] = [];
  filterAssetBuilding: AddAssetMainPage[] = [];
  filterAssetDepartment: AddAssetMainPage[] = [];
  filterAssetLocation: AddAssetMainPage[] = [];
  filterAssetPerson: AddAssetMainPage[] = [];
  filterAssetMaintainance: AddAssetMainPage[] = [];
  filterAssetWarrenty: AddAssetMainPage[] = [];
  filterAssetInsurance: AddAssetMainPage[] = [];

  // assettype: Allocate[] = [
  //   {value: 'type1', viewValue: 'Type 1'},
  //   {value: 'type2', viewValue: 'Type 2'},
  //   {value: 'type3', viewValue: 'Type 3'},
  // ];

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

  filterstatus: Allocate[] = [
    {value: 'UnAssigned', viewValue: 'UnAssigned'},
    {value: 'Discorded', viewValue: 'Discorded'},
    {value: 'Lost', viewValue: 'Lost'},
    {value: 'Assigned', viewValue: 'Assigned'},
  ];

  // filtermaintainance: Allocate[] = [
  //   {value: 'maintainance1', viewValue: 'maintainance 1'},
  //   {value: 'maintainance2', viewValue: 'maintainance 2'},
  //   {value: 'maintainance3', viewValue: 'maintainance 3'},
  // ];

  // filterwarrenty: Allocate[] = [
  //   {value: 'warrenty1', viewValue: 'warrenty 1'},
  //   {value: 'warrenty2', viewValue: 'warrenty 2'},
  //   {value: 'warrenty3', viewValue: 'warrenty 3'},
  // ];

  // filterinsured: Allocate[] = [
  //   {value: 'insured1', viewValue: 'insured 1'},
  //   {value: 'insured2', viewValue: 'insured 2'},
  //   {value: 'insured3', viewValue: 'insured 3'},
  // ];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFilterAssetName();
    this.getFilterAssetType();
    this.getFilterAssetDate();
    this.getFilterAssetBuilding();
    this.getFilterAssetDepartment();
    this.getFilterAssetLocation();
    this.getFilterAssetPerson();
    this.getFilterAssetMaintainance();
    this.getFilterAssetWarrety();
    this.getFilterAssetInsurance();
  }
  

  getFilterAssetName() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetName: post.assetname,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetName = post,
        // console.log(post.length);
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetName])
    })
  }
  

  getFilterAssetType() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetType: post.assettype,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetType = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetType])
    })
  }

  getFilterAssetDate() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetPurchaseDate: post.purchasedate,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetPurchaseDate = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetPurchaseDate])
    })
  }

  getFilterAssetBuilding() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetBuilding: post.allocatetobuilding,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetBuilding = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetBuilding])
    })
  }

  getFilterAssetDepartment() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetDepartment: post.allocatetodepartment,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetDepartment = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetDepartment])
    })
  }

  getFilterAssetLocation() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetLocation: post.allocatetolocation,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetLocation = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetLocation])
    })
  }

  getFilterAssetPerson() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetPerson: post.allocatetoperson,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetPerson = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetPerson])
    })
  }

  getFilterAssetMaintainance() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetMaintainance: post.maintenancedue,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetMaintainance = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetMaintainance])
    })
  }


  getFilterAssetWarrety() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetWarrenty: post.warduedate,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetWarrenty = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetWarrenty])
    })
  }

  getFilterAssetInsurance() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              filterAssetInsurance: post.insurancenumber,
          }
      })
    }))
    .subscribe(post => {
        this.filterAssetInsurance = post,
        // console.log(post);
        
        this.postUpdated.next([...this.filterAssetInsurance])
    })
  }
  

  filterform(form: NgForm){
    console.log(form.value)
  }



}

// let itemArray = [
//   { id: 1, value: 23 },
//   { id: 2, value: 30 },
//   { id: 3, value: 7 },
//   { id: 4, value: 21 }
// ];

// let sum: number = itemArray.map(a => a.value).reduce(function(a, b)
// {
//   return a + b;
// });
// console.log(sum);
