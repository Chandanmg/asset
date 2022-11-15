import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {

  numberofassets: '';
  netassetvalue=0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAssetLength();
    this.getAssetSum();
  }

  getAssetSum() {
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
  getAssetLength() {
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
