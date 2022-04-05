import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{  

  products:any=[];
  carts:any=[];
  constructor(private _http:HttpClient) {
    console.log(this.carts);

   }
   ngOnInit(){
     console.log("Done")
   }

  
  getProduct(){
   return this._http.get("https://shopping-angular-39a9b-default-rtdb.firebaseio.com/products.json")
    .pipe(map((resData:any)=>{
      const productList=[];
      for(let key in resData){
          productList.push(resData[key]);
      }
      return productList;
    }))
    
  }

  addProudct(products:any){
    return  this._http.post(
      "https://shopping-angular-39a9b-default-rtdb.firebaseio.com/products.json",
      products
      ).subscribe((res:any)=>{
        console.log("Sucessully Added !")
      })
  }

  addCart(cart:any){
    return this._http.post('https://shopping-angular-39a9b-default-rtdb.firebaseio.com/carts.json',
    cart).subscribe((res:any)=>{
      console.log(res);
    })
  }

  getCart(){
    return this._http.get('https://shopping-angular-39a9b-default-rtdb.firebaseio.com/carts.json')
                  .pipe(map((resData:any)=>{
                    const cartList=[];
                    for(let key in resData){
                      cartList.push(resData[key]);
                    }
                    return cartList;
                  }))
  }
  addWishList(cart:any){
    return this._http.post('https://shopping-angular-39a9b-default-rtdb.firebaseio.com/wishlist.json',
    cart).subscribe((res:any)=>{
      console.log(res);
    })
  }

  getWishList(){
    return this._http.get('https://shopping-angular-39a9b-default-rtdb.firebaseio.com/wishlist.json')
                  .pipe(map((resData:any)=>{
                    const wishList=[];
                    for(let key in resData){
                      wishList.push(resData[key]);
                    }
                    return wishList;
                  }))
  }
 
  



}
