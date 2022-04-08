import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

   productList=[]
  constructor(
    private _productService:ProductsService,
    private _dababoardService:DashboardService
    ) { }

  ngOnInit(): void {
    this._productService.getProduct().subscribe((product:any)=>{
      this.productList=product;
      this._dababoardService.products.next(product.length);

    })
  }

}
