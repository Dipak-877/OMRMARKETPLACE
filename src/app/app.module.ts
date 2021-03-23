import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
//datepicker ngx bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//model ngx bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
//corosal ngx bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustmoreOnBoardingComponent } from './custmore-on-boarding/custmore-on-boarding.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAccountComponent } from './profile/my-account/my-account.component';
import { MyAddressComponent } from './profile/my-address/my-address.component';
import { MyOrdersComponent } from './profile/my-orders/my-orders.component';
import { MyFavouritesComponent } from './profile/my-favourites/my-favourites.component';
import { MyChangePasswordComponent } from './profile/my-change-password/my-change-password.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SucesspageComponent } from './sucesspage/sucesspage.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';
import { DataService } from './services/data.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CustmoreOnBoardingComponent,
    ProductListingComponent,
    ProductComponent,
    CheckoutComponent,
    ProfileComponent,
    MyAccountComponent,
    MyAddressComponent,
    MyOrdersComponent,
    MyFavouritesComponent,
    MyChangePasswordComponent,
    SucesspageComponent,
    TrackingpageComponent 
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    TimepickerModule.forRoot(),
    CollapseModule.forRoot()

    
  ], entryComponents: [
    MyAccountComponent,
    MyAddressComponent,
    MyOrdersComponent,
    MyFavouritesComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
