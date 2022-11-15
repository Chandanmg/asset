import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authService: authService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.invalid){
       return;
    }
    this.authService.createUser( form.value.name, form.value.lastname, form.value.email, form.value.password);
    form.resetForm();
 }

}
