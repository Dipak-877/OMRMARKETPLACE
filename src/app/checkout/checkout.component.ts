import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  OrderSucess:boolean=false;
  ordesucessNo:boolean=true;
  pickupday:boolean=false;
  pickupTime:boolean=false;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  isMeridian = false;
  showSpinners = true;
  myTime: Date = new Date();
  showMainContent: Boolean = true;

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }

  ngOnInit(): void {
  }
 

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
 }
  showDayClick():void{
    this.pickupday=true;
    this.pickupTime=true;
  }

  orderSucessClick():void{
   this.OrderSucess=true;
   this.ordesucessNo=false;
  }
}
