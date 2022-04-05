import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './layout/add/add.component';
import { CartComponent } from './layout/cart/cart.component';
import { HomeComponent } from './layout/home/home.component';
import { ListDetailsComponent } from './layout/list-details/list-details.component';
import { WishlistComponent } from './layout/wishlist/wishlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CardWishlistComponent } from './components/card-wishlist/card-wishlist.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ListWishlistComponent } from './components/list-wishlist/list-wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    AddComponent,
    HomeComponent,
    ListDetailsComponent,
    WishlistComponent,
    CartComponent,
    CardWishlistComponent,
    DashboardComponent,
    ListWishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
