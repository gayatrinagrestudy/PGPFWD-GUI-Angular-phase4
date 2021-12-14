import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutitemComponent } from './checkoutitem.component';

describe('CheckoutitemComponent', () => {
  let component: CheckoutitemComponent;
  let fixture: ComponentFixture<CheckoutitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
