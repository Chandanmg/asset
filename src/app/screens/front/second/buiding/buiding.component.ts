
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AddBuildingPage } from '../dailog/add-building/add-building-model';
import { addBuildingService } from '../dailog/add-building/add-building-service';
import { AddBuildingComponent } from '../dailog/add-building/add-building.component';

export interface PeriodicElement {
  sl: number;
  name: string;
  floors: number;
  address: string;
  city: string;
  state: string;
  country: string;
}
@Component({
  selector: 'app-buiding',
  templateUrl: './buiding.component.html',
  styleUrls: ['./buiding.component.scss']
})
export class BuidingComponent implements OnInit {

  private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'name', 'floors', 'address', 'city', 'state', 'country','edit', 'delete'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AddBuildingPage[] = [];

  dataSource: MatTableDataSource<AddBuildingPage>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(public dailog: MatDialog, public addBuildingService: addBuildingService){}

  ngOnInit(): void{
    this.addBuildingService.getAddBuilding();
    this.postSub = this.addBuildingService.getPostUpdateListener()
      .subscribe((posts: AddBuildingPage[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
  }

  addBuilding(){
    this.dailog.open(AddBuildingComponent);
  }

  onDelete(id: string){
    console.log(id);
    this.addBuildingService.deleteBuilding(id);
  }

  onEdit(element: any){
    this.dailog.open(AddBuildingComponent,{
      data: element
    })
  }

}
