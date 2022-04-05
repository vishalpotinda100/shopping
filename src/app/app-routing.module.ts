import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './layout/add/add.component';
import { CartComponent } from './layout/cart/cart.component';
import { HomeComponent } from './layout/home/home.component';
import { WishlistComponent } from './layout/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent ,pathMatch:'full' },
  {path:'home',component:HomeComponent,redirectTo:''},
  {path:'add',component:AddComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
