import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private _productServive:ProductsService) { }
  wishlists=[];
  ngOnInit(): void {
    this._productServive.getWishList().subscribe((wishlist:any)=>{
      this.wishlists=wishlist;
    })
  }

}
