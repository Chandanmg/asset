import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { addAssetService } from './add-asset-dailog-service';

@Component({
  selector: 'app-add-asset-dailog',
  templateUrl: './add-asset-dailog.component.html',
  styleUrls: ['./add-asset-dailog.component.scss']
})
export class AddAssetDailogComponent implements OnInit {

  constructor(private addassetservice: addAssetService, private dailog: MatDialog) { }

  ngOnInit() {
  }

  addAsset(form : NgForm){
    this.addassetservice.addAsset(form.value.name)
  }

  onBack(){
    this.dailog.closeAll();
  }

}
