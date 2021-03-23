import { Component, OnInit ,TemplateRef} from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logIn:boolean=false;
   newUser:boolean=false;
   modalRef: BsModalRef;
   itemsPerSlide = 1;
   isCollapsed = true;
   constructor(private modalService: BsModalService,private router: Router) {}
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
showIndicator = true;
 
  switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }

  

}
