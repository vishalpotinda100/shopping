import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input() product:any;
  wishlists : any[] = new Array<any>() ;

  constructor(
    private _cartService:CartService,
    private _wishlistService:WishlistService,
    private router:Router
    ) { }

  ngOnInit(): void {
   
  }

  onCart(){
    this._cartService.addCart(this.product);
  }

  onWishList(){
  this._wishlistService.shop(this.product);
  }
  toDetailsPage(id:number){
   this.router.navigate(['product-details/'+id])
  }

}
