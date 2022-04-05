import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!:[];
  constructor(private _product:ProductsService) { }

  ngOnInit(): void {
    this._product.getProduct().subscribe((product:any)=>{
      this.products=product;
     })
  }

 

}
