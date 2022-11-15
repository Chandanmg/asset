import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { assetBottomDetailsService } from '../botomcontent_service';
import { AssetBottomDetails } from '../bottomcontent_model';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  
  private postUpdated = new Subject<AssetBottomDetails[]>();

  private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'number', 'date', 'vendor', 'value', 'viewdocument'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AssetBottomDetails[] = [];

  dataSource: MatTableDataSource<AssetBottomDetails>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.getInsurace()
  }

  getInsurace(){
    this.http
    .get<{message: string, posts: any}>('http://localhost:3000/getAddNewAsset')
    .pipe(map((postData) => {
        return postData.posts.map(post => {
            return {
                insurancenumber: post.insurancenumber,
                insurancevendor: post.insurancevendor,
                insuranceinsuredvalue: post.insuranceinsuredvalue
            }
        })
    }))
    .subscribe(post => {
        this.posts = post,
        this.postUpdated.next([...this.posts]);
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    })
  }
  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }

}
