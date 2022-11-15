import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { frontService } from './firstpage-service';


interface First {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {
  selectedCountry: string;
  selectedCurrency: string;
  constructor(public frontservice: frontService, private router: Router) { }

  ngOnInit() {
  }

  country: First[] = [
    {value: 'india', viewValue: 'India'},
    {value: 'america', viewValue: 'America'},
    {value: 'france', viewValue: 'France'},
  ];

  currency: First[] = [
    {value: 'rupee', viewValue: 'Rupee'},
    {value: 'dollar', viewValue: 'Dollar'},
  ];

  firstform(form: NgForm){
    if(form.invalid){
      return;
    }
    //console.log(form.value);
    this.frontservice.createOrganization(form.value.name, form.value.country, form.value.address, form.value.city, form.value.state, form.value.post, form.value.currency);
    form.resetForm();
    this.router.navigate(['/second']);
    //this.frontservice.createOrganization(form.value.name, form.value.country, form.value.address, form.value.city, form.value.state, form.value.post, form.value.currency);
    //console.log('data send')
  }

  onBack(){
    this.router.navigate(['/dashboard']);
  }

}
