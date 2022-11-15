import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auth } from '../../auth/auth.model';
import { authService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loginUser : '';


  constructor(public authService: authService, private http: HttpClient ) { }

  ngOnInit() {
    setTimeout(()=>{          
      this.loginUser = this.authService.user();
      // console.log(this.loginUser);
    }, 0.1000);
  }

  
}
