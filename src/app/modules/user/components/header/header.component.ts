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
   
    this._cartService.getCart().subscribe((cart:any)=>{
      if(cart.length >0){
        this.cartLength=cart.length;
        this.showCart=true;
      }
    })

    this._wishlistService.getWishList().subscribe((wishlist:any)=>{
      if(wishlist.length >0){
        this.wishListLength=wishlist.length;
        this.showWishlist=true;
      }
    })
  }

  
}
