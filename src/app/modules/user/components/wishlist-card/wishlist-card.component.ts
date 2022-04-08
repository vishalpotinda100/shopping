import { Component, Input, OnInit } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss']
})
export class WishlistCardComponent implements OnInit {
  @Input() wishlist:any;
  constructor(private _wishlistService:WishlistService) { }

  ngOnInit(): void {
    this._wishlistService.shopCardProduct.subscribe((item:any[])=>{
      console.log(item)
    })
  }

}
