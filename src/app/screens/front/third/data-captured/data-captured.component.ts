import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { AddCustomFieldComponent } from '../dailog/add-custom-field/add-custom-field.component';
import { AddCustomDailogPage } from '../dailog/add-custom-field/add-custom-model';
import { addCustomService } from '../dailog/add-custom-field/add-custom-service';

@Component({
  selector: 'app-data-captured',
  templateUrl: './data-captured.component.html',
  styleUrls: ['./data-captured.component.scss']
})
export class DataCapturedComponent implements OnInit {

  private postSub: Subscription;

  displayedColumns: string[] = ['sl','field','datarequired','description','example','edit', 'delete'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AddCustomDailogPage[] = [];

  dataSource: MatTableDataSource<AddCustomDailogPage>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(public dailog: MatDialog, public addcustomService: addCustomService){}

  ngOnInit(): void{
    this.addcustomService.getCustom();
    this.postSub = this.addcustomService.getPostUpdateListener()
      .subscribe((posts: AddCustomDailogPage[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
  }

  addCustom(){
    this.dailog.open(AddCustomFieldComponent);
  }

  onDelete(id: string){
    // console.log(id);
    this.addcustomService.deleteCustom(id);
  }
}
