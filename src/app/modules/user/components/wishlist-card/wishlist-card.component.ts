import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss']
})
export class WishlistCardComponent implements OnInit {
  @Input() wishlist:any;
  @Input() index!:number;
  constructor(
    private _wishlistService:WishlistService,
    private _cartService:CartService
    ) { }

  ngOnInit(): void {
    this._wishlistService.shopCardProduct.subscribe((item:any[])=>{
      console.log(item)
    })
  }

  onDelectWish(){
    this._wishlistService.removeWishList(this.index);
  }

  onAddToCart(){
    this._cartService.addCart(this.wishlist);
  }

}
