import { Component, OnInit } from '@angular/core';
import { authService } from '../../auth/auth.service';

@Component({
  selector: 'app-asset-reservation',
  templateUrl: './asset-reservation.component.html',
  styleUrls: ['./asset-reservation.component.scss']
})
export class AssetReservationComponent implements OnInit {
  loginUser : '';


  constructor(public authService: authService ) { }

  ngOnInit() {
    setTimeout(()=>{          
      this.loginUser = this.authService.user();
      // console.log(this.loginUser);
    }, 0.1000);
  }
}
