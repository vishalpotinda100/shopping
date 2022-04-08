import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  cartLength!:number;
  wishListLength!:number;
  showCart:boolean=false;
  showWishlist:boolean=false;
  constructor(
    private _cartService:CartService,
    private _wishlistService:WishlistService
    ) { }

  ngOnInit(): void {
    this._wishlistService.shopCardProduct.subscribe((item:any)=>{
      if(item.length > 0)
      this.showWishlist=true;
      this.wishListLength=item.length;
    })
 
    this._cartService.cartProduts.subscribe((cart:any)=>{
        if(cart.length > 0){
          this.showCart=true;
          this.cartLength=cart.length;
        }
    })
  }

  
}
