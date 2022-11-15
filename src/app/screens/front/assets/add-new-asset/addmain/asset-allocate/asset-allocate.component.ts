import { Component, OnInit } from '@angular/core';


interface Allocate {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-asset-allocate',
  templateUrl: './asset-allocate.component.html',
  styleUrls: ['./asset-allocate.component.scss']
})
export class AssetAllocateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tobuilding: Allocate[] = [
    {value: 'building1', viewValue: 'Building 1'},
    {value: 'building2', viewValue: 'Building 2'},
    {value: 'building3', viewValue: 'Building 3'},
  ];

  todepartment: Allocate[] = [
    {value: 'department1', viewValue: 'Department 1'},
    {value: 'department2', viewValue: 'Department 2'},
    {value: 'department3', viewValue: 'Department 3'},
  ];

  tolocation: Allocate[] = [
    {value: 'location1', viewValue: 'Location 1'},
    {value: 'location2', viewValue: 'Location 2'},
    {value: 'location3', viewValue: 'Location 3'},
  ];

  toperson: Allocate[] = [
    {value: 'person1', viewValue: 'Person 1'},
    {value: 'person2', viewValue: 'Person 2'},
    {value: 'person3', viewValue: 'Person 3'},
  ];  

}
