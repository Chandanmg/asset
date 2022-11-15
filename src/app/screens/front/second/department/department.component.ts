import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AddBuildingPage } from '../dailog/add-building/add-building-model';
import { addBuildingService } from '../dailog/add-building/add-building-service';
import { AddBuildingComponent } from '../dailog/add-building/add-building.component';
import { AddDepartmentPage } from '../dailog/add-department/add-department-model';
import { addDepartmentService } from '../dailog/add-department/add-department-service';
import { AddDepartmentComponent } from '../dailog/add-department/add-department.component';
import { AddLocationComponent } from '../dailog/add-location/add-location.component';

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
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'name','edit', 'delete'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AddDepartmentPage[] = [];

  dataSource: MatTableDataSource<AddDepartmentPage>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(public dailog: MatDialog, public addDepartmentService: addDepartmentService){}

  ngOnInit(): void{
    this.addDepartmentService.getAddDepartment();
    this.postSub = this.addDepartmentService.getPostUpdateListener()
      .subscribe((posts: AddDepartmentPage[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
  }

  addDepartment(){
    this.dailog.open(AddDepartmentComponent);
  }

  onDelete(id: string){
    console.log(id);
    this.addDepartmentService.deleteDepartment(id);
  }

  onEdit(element){
    //const dataa = this.posts.find(p => p.id === id);
    // const dailogRef = this.dailog.open(AddBuildingComponent, {
    //   data: element
    // })
    //this.addBuildingService.getAddBuilding().find()
    this.dailog.open(AddDepartmentComponent,{
      data: element
    })
  }

}
