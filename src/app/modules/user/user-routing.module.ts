import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './layout/cart/cart.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';
import { RegisterComponent } from './layout/register/register.component';
import { WishlistComponent } from './layout/wishlist/wishlist.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {path:'',component:HomeComponent,pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'cart',component:CartComponent},
      {path:'product-details/:id',component:ProductDetailsComponent}

    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
