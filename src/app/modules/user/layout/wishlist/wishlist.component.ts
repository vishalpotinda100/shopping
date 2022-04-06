import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../admin/services/products.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor( private _wishlistServiceL:WishlistService) { }
  wishlists=[];
  ngOnInit(): void {
    this._wishlistServiceL.getWishList().subscribe((wishlist:any)=>{
      this.wishlists=wishlist;
    })
  }

}
