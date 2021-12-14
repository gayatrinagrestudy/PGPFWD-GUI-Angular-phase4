import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fooditem } from 'src/app/fooditem';
import { FooditemService } from 'src/app/services/fooditem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username:string;
  password:string;
  alert:Boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  logInUser= function () {
    if(this.username=="admin" && this.password=="start"){ 
            this.router.navigateByUrl('/allitems)') ;
      
    }else{
      this.alert=true;
      this.username="";
      this.password="";
      console.log("Wrong User..");
    }
  }

  isUserLoggedin(){
    if(this.username!==null || this.username!==''){ 
      return true;
  }
}
}
