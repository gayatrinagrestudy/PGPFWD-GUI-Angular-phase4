import { Component, OnInit } from '@angular/core';
import { Fooditem } from 'src/app/fooditem';
import { FooditemService } from 'src/app/services/fooditem.service';


@Component({
  selector: 'app-allfooditems',
  templateUrl: './allfooditems.component.html',
  styleUrls: ['./allfooditems.component.scss']
})
export class AllfooditemsComponent implements OnInit {
  allfooditems : Fooditem[];
  fastfooditems : Fooditem[];
  public searchKey : string='';
 
  constructor(private foodItemService : FooditemService) { }

  ngOnInit(): void {
    
    this.getFoodItems();
    this.foodItemService.search.subscribe((val:any) => {
      this.searchKey=val;
    })
    //this.getFoodItems();
  }

  private getFoodItems(){
    this.foodItemService.getItemList().subscribe(data => {
      console.log("-----------  data " +data);
      this.allfooditems = data;
    })
  }


}
