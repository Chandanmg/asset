import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { addLocationService } from './add-location-service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  constructor(
    public dailog: MatDialog, 
    public addLocationService: addLocationService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
  ) { }

  ngOnInit() {}

  addLocation(form: NgForm){
    this.addLocationService.addLocation(form.value.name);
  }
  onBack(){
      this.dailog.closeAll();
  }


}
