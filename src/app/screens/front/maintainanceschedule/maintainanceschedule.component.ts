import { Component, OnInit } from '@angular/core';
import { authService } from '../../auth/auth.service';

@Component({
  selector: 'app-maintainanceschedule',
  templateUrl: './maintainanceschedule.component.html',
  styleUrls: ['./maintainanceschedule.component.scss']
})
export class MaintainancescheduleComponent implements OnInit {

  loginUser : '';


  constructor(public authService: authService) { }

  ngOnInit() {
    setTimeout(()=>{          
      this.loginUser = this.authService.user();
      // console.log(this.loginUser);
    }, 0.1000);
  }
}
