import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { addDepartmentService } from './add-department-service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  constructor(
    public dailog: MatDialog, 
    public addDepartmentService: addDepartmentService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
  ) { }

  ngOnInit() {}

  addDepartment(form: NgForm){
      this.addDepartmentService.addDepartment(form.value.name);
  }
  onBack(){
      this.dailog.closeAll();
  }
}
