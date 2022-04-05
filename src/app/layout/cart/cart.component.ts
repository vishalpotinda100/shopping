import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts:any=[];
  constructor(private _productServive:ProductsService) { }

  ngOnInit(): void {
    this._productServive.getCart().subscribe((cart:any)=>{
      this.carts=cart;
    })
  }

}
