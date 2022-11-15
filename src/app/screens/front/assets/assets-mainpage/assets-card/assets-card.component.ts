import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AddAssetMainPage } from '../../add-new-asset/addmain/addnewasset.model';

@Component({
  selector: 'app-assets-card',
  templateUrl: './assets-card.component.html',
  styleUrls: ['./assets-card.component.scss']
})
export class AssetsCardComponent implements OnInit {

  // filterAssetName: AddAssetMainPage[] = [];
  numberofassets: '';
  netassetvalue=0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFilterAssetLength();
    this.getFilterAssetSum();
  }

  getFilterAssetSum() {
    // this.seatData = [];
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              cost: post.basiccost,
          }
      })
    }))
    .subscribe(post => {
        let sum: number = post.map(a => a.cost).reduce(function(a, b)
      {
        return a + b;
      });
      // console.log(sum);
      this.netassetvalue = sum;
      // console.log(this.netassetvalue)
    })
  }
  getFilterAssetLength() {
    // this.seatData = [];
    this.http.get<{message:string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postsData)=>{
      return postsData.posts.map(post => {
          return {
              // id: post._id,
              // filterAssetName: post.assetname,
              
          }
      })
    }))
    .subscribe(post => {
        // this.filterAssetName = post;
        this.numberofassets = post.length;
    });
  }

}
