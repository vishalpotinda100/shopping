import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts:any=[];
  cartshow:boolean=false;
  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this._cartService.getCart().subscribe((cart:any)=>{
      if(cart.length >0){
        this.cartshow=true;
        this.carts=cart;
      }
    
    })
   
  }
}
