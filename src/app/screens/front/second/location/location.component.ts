import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AddLocationPage } from '../dailog/add-location/add-location-model';
import { addLocationService } from '../dailog/add-location/add-location-service';
import { AddLocationComponent } from '../dailog/add-location/add-location.component';

export interface PeriodicElement {
  sl: number;
  name: string;
}
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'name','edit', 'delete'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AddLocationPage[] = [];

  dataSource: MatTableDataSource<AddLocationPage>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(public dailog: MatDialog, public addLocationService: addLocationService){}

  ngOnInit(): void{
    this.addLocationService.getAddLocation();
    this.postSub = this.addLocationService.getPostUpdateListener()
      .subscribe((posts: AddLocationPage[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
  }

  addLocation(){
    this.dailog.open(AddLocationComponent);
  }

  onDelete(id: string){
    console.log(id);
    this.addLocationService.deleteLocation(id);
  }

  onEdit(element){
    //const dataa = this.posts.find(p => p.id === id);
    // const dailogRef = this.dailog.open(AddBuildingComponent, {
    //   data: element
    // })
    //this.addBuildingService.getAddBuilding().find()
    this.dailog.open(AddLocationComponent,{
      data: element
    })
  }

}
