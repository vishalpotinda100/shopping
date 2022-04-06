import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{  

  products:any=[];
  constructor(private _http:HttpClient) {

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

  
  
  



}
