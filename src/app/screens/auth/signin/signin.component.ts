import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from '../auth.model';
import { authService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public authService: authService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.authService.getEmitter().subscribe((customObject) => { 
      // console.log("Component is notified of successfull login!"); 
      // console.log(customObject);
      this.authService.getCurrentUser(customObject);
    });
  }

  
  onSubmit(form: NgForm){
     if(form.invalid){
        return;
     }
    // console.log(form.value);
    this.authService.loginUser( form.value.name, form.value.lastname, form.value.email, form.value.password);
    form.resetForm();
    //this.router.navigate(['/firstpage'])
  }

}
