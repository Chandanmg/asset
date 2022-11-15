import { Component, OnInit } from '@angular/core';


interface AssetType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-asset-basic',
  templateUrl: './asset-basic.component.html',
  styleUrls: ['./asset-basic.component.scss']
})
export class AssetBasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  assettype: AssetType[] = [
    {value: 'type1', viewValue: 'Type 1'},
    {value: 'type2', viewValue: 'Type 2'},
    {value: 'type3', viewValue: 'Type 3'},
  ];


}
