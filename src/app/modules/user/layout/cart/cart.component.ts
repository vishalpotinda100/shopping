import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts:any=[];
  constructor(private _cartService:CartService) { }

  ngOnInit(): void {
    this._cartService.getCart().subscribe((cart:any)=>{
      this.carts=cart;
    })
  }
}
