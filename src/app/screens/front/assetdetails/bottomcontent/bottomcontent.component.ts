import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottomcontent',
  templateUrl: './bottomcontent.component.html',
  styleUrls: ['./bottomcontent.component.scss']
})
export class BottomcontentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'name', 'floors', 'address', 'city', 'delete'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  // posts: AddBuildingPage[] = [];

  // dataSource: MatTableDataSource<AddBuildingPage>;

  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   //this.dataSource.paginator = this.paginator;
  // }

  // constructor(public dailog: MatDialog, public addBuildingService: addBuildingService){}

  // ngOnInit(): void{
  //   this.addBuildingService.getAddBuilding();
  //   this.postSub = this.addBuildingService.getPostUpdateListener()
  //     .subscribe((posts: AddBuildingPage[]) => {
  //       this.posts = posts;
  //       this.dataSource = new MatTableDataSource(this.posts);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     });
      
  // }

  // addBuilding(){
  //   this.dailog.open(AddBuildingComponent);
  // }

  // onDelete(id: string){
  //   console.log(id);
  //   this.addBuildingService.deleteBuilding(id);
  // }

  // onEdit(element: any){
  //   this.dailog.open(AddBuildingComponent,{
  //     data: element
  //   })
  // }

}
