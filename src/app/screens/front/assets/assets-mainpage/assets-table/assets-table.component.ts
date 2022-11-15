import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['sl', 'name', 'floors', 'address', 'city', 'state', 'country'];

}
