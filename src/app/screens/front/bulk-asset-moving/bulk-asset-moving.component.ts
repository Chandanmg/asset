import { Component, OnInit } from '@angular/core';
import { authService } from '../../auth/auth.service';

@Component({
  selector: 'app-bulk-asset-moving',
  templateUrl: './bulk-asset-moving.component.html',
  styleUrls: ['./bulk-asset-moving.component.scss']
})
export class BulkAssetMovingComponent implements OnInit {

  loginUser : '';


  constructor(public authService: authService) { }

  ngOnInit() {
    setTimeout(()=>{          
      this.loginUser = this.authService.user();
      // console.log(this.loginUser);
    }, 0.1000);
  }
}
