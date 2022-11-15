import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { AddAssetDailogPage } from '../dailog/add-asset-dailog/add-asset-dailog-model';
import { addAssetService } from '../dailog/add-asset-dailog/add-asset-dailog-service';
import { AddAssetDailogComponent } from '../dailog/add-asset-dailog/add-asset-dailog.component';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'name','checkbox1','checkbox2','checkbox3','edit', 'delete'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AddAssetDailogPage[] = [];

  dataSource: MatTableDataSource<AddAssetDailogPage>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(public dailog: MatDialog, public addassetService: addAssetService){}

  ngOnInit(): void{
    this.addassetService.getAsset();
    this.postSub = this.addassetService.getPostUpdateListener()
      .subscribe((posts: AddAssetDailogPage[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
  }

  addAsset(){
    this.dailog.open(AddAssetDailogComponent);
  }

  onDelete(id: string){
    // console.log(id);
    this.addassetService.deleteAsset(id);
  }
}
