import { Component, OnInit } from '@angular/core';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyAddressComponent } from './my-address/my-address.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyFavouritesComponent } from './my-favourites/my-favourites.component';
import { MyChangePasswordComponent } from './my-change-password/my-change-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isshowpro:boolean=false;
  constructor() { }
  public dynamicComp = MyAccountComponent;
  ngOnInit(): void {
  }

  assignCom(component:any) {
    if (component === 'account') {
      this.dynamicComp = MyAccountComponent;
    }
    if (component === 'address') {
      this.dynamicComp = MyAddressComponent;
    }
    if (component === 'orders') {
      this.dynamicComp = MyOrdersComponent;
    }
    if (component === 'favou') {
      this.dynamicComp = MyFavouritesComponent;
    }
    if (component === 'change') {
      this.dynamicComp = MyChangePasswordComponent;
    }
  }

}
