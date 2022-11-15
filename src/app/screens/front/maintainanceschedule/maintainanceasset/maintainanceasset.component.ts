import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintainanceasset',
  templateUrl: './maintainanceasset.component.html',
  styleUrls: ['./maintainanceasset.component.scss']
})
export class MaintainanceassetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['sl', 'name', 'floors', 'address', 'city', 'state', 'country'];
 
}
