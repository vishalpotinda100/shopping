import { Component,Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-cart-cart',
  templateUrl: './cart-cart.component.html',
  styleUrls: ['./cart-cart.component.scss']
})
export class CartCartComponent implements OnInit {
  @Input() cart:any;
  @Input() index!:number;
  constructor(
    private _cartService:CartService,
    private _wishlistService:WishlistService
    ) { }

  ngOnInit(): void {
    
  }

  onDeleteCart(id:number){  
      this._cartService.removeCart(this.index);
  }
  onWishlist(){
    this._wishlistService.shop(this.cart);
  }

  

 


  



}
