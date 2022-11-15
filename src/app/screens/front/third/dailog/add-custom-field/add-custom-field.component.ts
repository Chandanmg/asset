import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { addCustomService } from './add-custom-service';

@Component({
  selector: 'app-add-custom-field',
  templateUrl: './add-custom-field.component.html',
  styleUrls: ['./add-custom-field.component.scss']
})
export class AddCustomFieldComponent implements OnInit {

  constructor(private addcustomservice: addCustomService, private dailog: MatDialog) { }

  ngOnInit() {
  }

  addCustom(form : NgForm){
    this.addcustomservice.addCustom(form.value.field, form.value.description, form.value.example)
  }

  onBack(){
    this.dailog.closeAll();
  }

}
