import { CheckoutitemComponent } from './components/checkoutitem/checkoutitem.component';
import { FooddetailsComponent } from './components/fooddetails/fooddetails.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllfooditemsComponent } from './menu/allfooditems/allfooditems.component';
import { PaymentconfimationComponent } from './components/paymentconfimation/paymentconfimation.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'fooddetails/:id' , component: FooddetailsComponent},
  {path: 'checkout' , component:CheckoutitemComponent},
  {path: 'allitems' , component:AllfooditemsComponent},
  {path: 'payconfirm' , component:PaymentconfimationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
