import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-assettable',
  templateUrl: './moving-assettable.component.html',
  styleUrls: ['./moving-assettable.component.scss']
})
export class MovingAssettableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['sl', 'name', 'floors', 'address', 'city', 'state', 'country'];

}
