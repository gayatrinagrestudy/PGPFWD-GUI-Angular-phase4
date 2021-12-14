import { Component, OnInit } from '@angular/core';
import { CartcheckoutService } from 'src/app/services/cartcheckout.service';

@Component({
  selector: 'app-paymentconfimation',
  templateUrl: './paymentconfimation.component.html',
  styleUrls: ['./paymentconfimation.component.scss']
})
export class PaymentconfimationComponent implements OnInit {
  totalprice : number;

  constructor(private cardservice : CartcheckoutService) { }

  ngOnInit(): void {
    this.totalprice =this.cardservice.getTotalItemByProp('price');
  }

}
