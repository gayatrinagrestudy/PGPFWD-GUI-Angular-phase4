import { Fooditem } from './../../fooditem';
import { FooditemService } from './../../services/fooditem.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartcheckoutService } from 'src/app/services/cartcheckout.service';


@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.scss']
})
export class FooddetailsComponent implements OnInit {
   @Input() itemInfo : Fooditem;
   fooditem: Fooditem = new Fooditem();
   qtyAddedToCart  : number = 0;
   itemcount : number=0;
   fooditemList: Fooditem[];
   totalFoodItemInCart : number[] = new Array();
   
  
  constructor(private fooditemservice:FooditemService, private router: ActivatedRoute,
    private cart:CartcheckoutService) {
    }

  ngOnInit(): void {
    
    this.fooditemservice.getFoodItemById(this.router.snapshot.params.id).subscribe((data)=>{
    this.fooditem = data; 
  });
    this.fooditemservice.getFoodItemByName(this.router.snapshot.params.id).subscribe((data)=>{
      this.fooditem = data;  
    });
    this.qtyAddedToCart = this.cart.getTotalItemByProp(`qty`, JSON.stringify(this.fooditem.id));
    
  }

  addToCart(): void{
    this.qtyAddedToCart = this.cart.add(this.fooditem);
  }
  removeFromCart(): void{
    this.qtyAddedToCart = this.cart.remove(JSON.stringify(this.fooditem.id));
  }



     
    
}

