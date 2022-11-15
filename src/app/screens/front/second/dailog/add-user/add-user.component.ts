import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { addUserService } from './add-user-service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    public dailog: MatDialog, 
    public addUserService: addUserService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
  ) { }

  ngOnInit() {}

  addUser(form: NgForm){
    this.addUserService.addUser(form.value.name);
  }
  onBack(){
      this.dailog.closeAll();
  }



}
