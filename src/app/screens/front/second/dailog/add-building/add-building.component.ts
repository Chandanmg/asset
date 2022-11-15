import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { addBuildingService } from './add-building-service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {
  productForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dailog: MatDialog, 
    public addBuildingService: addBuildingService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
  ) { }

  ngOnInit(){}

  addBuilding(form: NgForm){
      this.addBuildingService.addbuilding(form.value.name, form.value.floors, form.value.address, form.value.city, form.value.state, form.value.country);
  }
  onBack(){
      this.dailog.closeAll();
  }

}
