import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assets-header',
  templateUrl: './assets-header.component.html',
  styleUrls: ['./assets-header.component.scss']
})
export class AssetsHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addAssets(){
    this.router.navigate(['/addnewassets']);
  }

}
