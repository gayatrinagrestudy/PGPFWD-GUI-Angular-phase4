import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentconfimationComponent } from './paymentconfimation.component';

describe('PaymentconfimationComponent', () => {
  let component: PaymentconfimationComponent;
  let fixture: ComponentFixture<PaymentconfimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentconfimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentconfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
