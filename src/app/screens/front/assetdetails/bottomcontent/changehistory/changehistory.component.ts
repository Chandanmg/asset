import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changehistory',
  templateUrl: './changehistory.component.html',
  styleUrls: ['./changehistory.component.scss']
})
export class ChangehistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['sl', 'name', 'person', 'change'];

}
