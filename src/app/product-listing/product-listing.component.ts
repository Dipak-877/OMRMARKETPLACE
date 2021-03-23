import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  isshow = false;
  data1:{};
  constructor(private _DataService:DataService) { }

  ngOnInit(): void {
    this._DataService.getConfig()
      .subscribe((data)=>{console.log(this.data1)});
  }
  showConfig() {
    
  }
}
