import { Component, OnInit, TemplateRef, NgModule } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custmore-on-boarding',
  templateUrl: './custmore-on-boarding.component.html',
  styleUrls: ['./custmore-on-boarding.component.css']
})
export class CustmoreOnBoardingComponent implements OnInit {
  isCollapsed = true;
  logIn: boolean = false;
  newUser: boolean = false;
  modalRef: BsModalRef;
  itemsPerSlide = 3;

  constructor(private modalService: BsModalService, private router: Router) { }
  
 
  slides = [
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'},
    {image: 'assets/img/bannerImg.jpeg'}
  ];
  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openCreat(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1);
  }
  resetPassword(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
  }
  newChange(): void {
    this.router.navigateByUrl('/page');
  }
  

}
