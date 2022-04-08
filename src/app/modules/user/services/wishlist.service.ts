import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  cart=new BehaviorSubject([]);

  shopCardProduct = new Subject<any[]>();
  products : any[] = new Array<any>() ;


  constructor(private _http:HttpClient){
      this.shopCardProduct = new BehaviorSubject<any>(new Array<any>())
  }


  shop(product: any){
    this.products.push(product);
    this.shopCardProduct.next(this.products);
 }

 getWishlist(){
   return this.shopCardProduct;
 }


 removeWishList(id:number){
  const filterCart = this.products.splice(id,1);
  this.shopCardProduct.next(this.products);
 
}

 



 
}
