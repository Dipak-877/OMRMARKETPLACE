import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  statreCorse: boolean = true;
  mainCorse: boolean = true;
  DessertseCorse: boolean = true;
  DrinksCorse: boolean = true;
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
  staterClick(): void {
    this.statreCorse = true;
    this.mainCorse = false;
    this.DessertseCorse = false;
    this.DrinksCorse = false;
  }
  MainClick(): void {
    this.statreCorse = false;
    this.mainCorse = true;
    this.DessertseCorse = false;
    this.DrinksCorse = false;
  }
  dessertsClick(): void {
    this.statreCorse = false;
    this.mainCorse = false;
    this.DessertseCorse = true;
    this.DrinksCorse = false;
  }
  drinksClick(): void {
    this.statreCorse = false;
    this.mainCorse = false;
    this.DessertseCorse = false;
    this.DrinksCorse = true;
  }
}
