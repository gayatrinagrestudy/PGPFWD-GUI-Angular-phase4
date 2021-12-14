import { Component, OnInit } from '@angular/core';
import { FooditemService } from 'src/app/services/fooditem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public searchTerm: string = '';
  constructor(private service: FooditemService) { }
  count:String; 
  ngOnInit(): void {
  }
  
  search(event:any){
   this.searchTerm = (event.target as HTMLInputElement).value;
   console.log("this.searchTerm   ======= "+this.searchTerm);
   this.service.search.next(this.searchTerm);
  }

}
