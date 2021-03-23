import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustmoreOnBoardingComponent } from './custmore-on-boarding/custmore-on-boarding.component';
import { ProductComponent } from './product/product.component';

import { ProductListingComponent } from './product-listing/product-listing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { SucesspageComponent } from './sucesspage/sucesspage.component';
import { TrackingpageComponent } from './trackingpage/trackingpage.component';

const appRoutes: Routes = [
  { path: 'sucess', component: SucesspageComponent },
  { path: 'track', component: TrackingpageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'page', component: PageNotFoundComponent },
  { path: 'custmoreOnboarding', component: CustmoreOnBoardingComponent },
  { path: 'product-listing', component: ProductListingComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'custmoreOnboarding', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
