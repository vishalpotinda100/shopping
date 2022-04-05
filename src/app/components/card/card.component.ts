import { Component,Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product:any;

  constructor(private _productService:ProductsService,private router:Router) { }

  ngOnInit(): void {

  }

  onCart(){
    this._productService.addCart(this.product);
  }
  onWishList(){
    this._productService.addWishList(this.product);
  }

}
