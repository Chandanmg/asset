import { Component, OnInit } from '@angular/core';
import { authService } from '../../auth/auth.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  loginUser : '';


  constructor(public authService: authService) { }

  ngOnInit() {
    setTimeout(()=>{          
      this.loginUser = this.authService.user();
      // console.log(this.loginUser);
    }, 0.1000);
  }
}
