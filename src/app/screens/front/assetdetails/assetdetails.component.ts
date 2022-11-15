import { Component, OnInit } from '@angular/core';
import { authService } from '../../auth/auth.service';

@Component({
  selector: 'app-assetdetails',
  templateUrl: './assetdetails.component.html',
  styleUrls: ['./assetdetails.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  loginUser : '';


  constructor(public authService: authService) { }

  ngOnInit() {
    setTimeout(()=>{          
      this.loginUser = this.authService.user();
      // console.log(this.loginUser);
    }, 0.1000);
  }
}
