import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fooditem } from 'src/app/fooditem';
import { CartcheckoutService } from 'src/app/services/cartcheckout.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-checkoutitem',
  templateUrl: './checkoutitem.component.html',
  styleUrls: ['./checkoutitem.component.scss']
})
export class CheckoutitemComponent implements OnInit {
  
  private _cartItems: any = [];
  @Input() private home: HomeComponent;
  paymentmessage : string;
  alert : boolean;
  public shippingCost = 0;
  constructor(public cart: CartcheckoutService, private router: Router) { }

  ngOnInit(): void {
  }


  get cartItems(){
    const cartItems = localStorage.getItem('cartItems');
    return cartItems !== 'null' && cartItems !== null ? Object.values(JSON.parse(cartItems)) : [];
  }
  set cartItems(items){
    this._cartItems = items;
  }
  valueChanged(item, event){
    this.cart.add(item, event.target.value);
  }

  getLineItems(){
    let lineItems = [];
    this.cartItems.forEach((item: Fooditem) => {
      const price = item.price;
      const quantity = item.qty;
      lineItems.push( { price , quantity } );
    })
    return lineItems;
  }

  payment(){
      if(this.home.isUserLoggedin()){
        this.router.navigateByUrl('/payconfirm');
      } else {
        this.alert = true;
        this.paymentmessage = "Please login before placing the order."
      }
          

  }

}
