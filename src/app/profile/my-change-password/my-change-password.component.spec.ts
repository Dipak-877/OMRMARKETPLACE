import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChangePasswordComponent } from './my-change-password.component';

describe('MyChangePasswordComponent', () => {
  let component: MyChangePasswordComponent;
  let fixture: ComponentFixture<MyChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
