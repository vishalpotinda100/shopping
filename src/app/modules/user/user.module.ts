import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { HomeComponent } from './layout/home/home.component';
import { CartComponent } from './layout/cart/cart.component';
import { WishlistComponent } from './layout/wishlist/wishlist.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { CartCartComponent } from './components/cart-cart/cart-cart.component';
import { WishlistCardComponent } from './components/wishlist-card/wishlist-card.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    HeaderComponent,
    FooterComponent,
    HomeCardComponent,
    CartCartComponent,
    WishlistCardComponent,
    UserComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
   
  ]
})
export class UserModule { }
