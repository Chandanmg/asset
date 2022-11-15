import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { AlertDashboard } from './alerts-dashboard-model';
import { alertDashboardService } from './alerts-dashboard-service';

@Component({
  selector: 'app-alerts-dashboard',
  templateUrl: './alerts-dashboard.component.html',
  styleUrls: ['./alerts-dashboard.component.scss']
})
export class AlertsDashboardComponent implements OnInit {

  private postSub: Subscription;

  displayedColumns: string[] = ['sl', 'assetname', 'alerttype', 'duedate', 'view'];
 
  //dataSource = new MatTableDataSource<AddBuildingPage>(this.ELEMENT_DATA);

  posts: AlertDashboard[] = [];

  dataSource: MatTableDataSource<AlertDashboard>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  constructor(public dailog: MatDialog, public alertDashboardService: alertDashboardService){}

  ngOnInit(): void{
    this.getAssetName();
      
  }

  getAssetName(){
    this.alertDashboardService.getAlertTable();
    this.postSub = this.alertDashboardService.getPostUpdateListener()
      .subscribe((posts: AlertDashboard[]) => {
        this.posts = posts;
        this.dataSource = new MatTableDataSource(this.posts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

}
