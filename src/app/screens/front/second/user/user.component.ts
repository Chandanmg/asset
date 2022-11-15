
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AddUserPage } from '../dailog/add-user/add-user-model';
import { addUserService } from '../dailog/add-user/add-user-service';
import { AddUserComponent } from '../dailog/add-user/add-user.component';

export interface PeriodicElement {
  sl: number;
  name: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'name','checkbox1','checkbox2','checkbox3','edit', 'delete'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AddUserPage[] = [];

  dataSource: MatTableDataSource<AddUserPage>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(public dailog: MatDialog, public addUserService: addUserService){}

  ngOnInit(): void{
    this.addUserService.getAddUser();
    this.postSub = this.addUserService.getPostUpdateListener()
      .subscribe((posts: AddUserPage[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
  }

  addUser(){
    this.dailog.open(AddUserComponent);
  }

  onDelete(id: string){
    console.log(id);
    this.addUserService.deleteUser(id);
  }

  onEdit(element){
    //const dataa = this.posts.find(p => p.id === id);
    // const dailogRef = this.dailog.open(AddBuildingComponent, {
    //   data: element
    // })
    //this.addBuildingService.getAddBuilding().find()
    this.dailog.open(AddUserComponent,{
      data: element
    })
  }

}


