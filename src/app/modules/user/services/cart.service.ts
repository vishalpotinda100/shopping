import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carts:any=[];
  constructor(private _http:HttpClient) { }
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
}
