import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-reservation-table',
  templateUrl: './asset-reservation-table.component.html',
  styleUrls: ['./asset-reservation-table.component.scss']
})
export class AssetReservationTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['sl', 'name', 'floors', 'address', 'city', 'state', 'country'];

}
