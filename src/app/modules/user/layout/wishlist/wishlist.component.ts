import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor( private _wishlistServiceL:WishlistService) { }
  wishlists=[];
  wishlistshow:boolean=false;
  ngOnInit(): void {
    this._wishlistServiceL.getWishlist().subscribe((item:any)=>{
      if(item.length >0){
        this.wishlistshow=true;
        this.wishlists=item;
      }
    })
  }

}
