import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss']
})
export class ProductListCardComponent implements OnInit {

  @Input() products:any;
  constructor(
    private _productService:ProductsService,
    private _roter:Router
     ) { }

  ngOnInit(): void {
  }
  onRemoveProduct(id:number){
    this._productService.removeProduct(id);
    this._roter.navigate(['admin']);
    
    
  }

}
