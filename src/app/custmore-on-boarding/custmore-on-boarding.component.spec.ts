import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmoreOnBoardingComponent } from './custmore-on-boarding.component';

describe('CustmoreOnBoardingComponent', () => {
  let component: CustmoreOnBoardingComponent;
  let fixture: ComponentFixture<CustmoreOnBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmoreOnBoardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmoreOnBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
