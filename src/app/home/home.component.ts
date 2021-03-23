import { Component, OnInit ,TemplateRef} from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   logIn:boolean=false;
   newUser:boolean=false;
   modalRef: BsModalRef;
   itemsPerSlide = 4;
   slidesChangeMessage = '';
   selected: string;
   singleSlideOffset = false;
   noWrap = false;

 
  slides = [
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
    {image: 'assets/img/kfc.png'},
  ];
   showIndicator = false;
   constructor(private modalService: BsModalService) {}
  
   openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }
   switchIndicator(): void {
    this.showIndicator = !this.showIndicator;
  }
  clearLocatiom(){
    debugger;
    this.selected="";
  
  }
  
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

   onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
  ngOnInit(): void {
  }

loginClick(){
  this.logIn=true;
  this.newUser=false;
}


newUserClick(){
  this.newUser=true;
  this.logIn=false;
}
}
