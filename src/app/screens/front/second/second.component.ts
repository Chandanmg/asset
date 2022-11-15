import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddBuildingPage } from './dailog/add-building/add-building-model';
import { addBuildingService } from './dailog/add-building/add-building-service';
import { AddBuildingComponent } from './dailog/add-building/add-building.component';

// export interface PeriodicElement {
//   sl: number;
//   name: string;
//   floors: number;
//   address: string;
//   city: string;
//   state: string;
//   country: string;
// }

//const ELEMENT_DATA: AddBuildingPage[] = [];

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})


export class SecondComponent implements AfterViewInit {

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  next(){
    this.router.navigate(['/third'])
  }

  back(){
    this.router.navigate(['/firstpage'])
  }

  
}
