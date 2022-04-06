import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/modules/admin/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id!:any;
  productList={
    title:'',
    description:'',
    price:null,
    thumbnail:'',
    category:''
  };
  constructor(
    private route:ActivatedRoute,
    private _productService:ProductsService
    ) { }


  ngOnInit(): void {
  this.route.params.subscribe((params:Params)=>{
      console.log(params['id'])
      this.id=params['id'];
    });

    this._productService.getProduct().subscribe((items:any)=>{
     console.log(items)
     const filterList=items.filter((item:any)=>item.id==this.id)
     this.productList.title=filterList[0].title;
     this.productList.description=filterList[0].description;
     this.productList.price=filterList[0].price;
     this.productList.category=filterList[0].category;
     this.productList.thumbnail=filterList[0].thumbnail;


    })
  }

}
