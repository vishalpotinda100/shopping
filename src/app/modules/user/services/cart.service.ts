import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartProduts=new Subject<any[]>();
  carts:any[]=new Array<any>();


  constructor(private _http:HttpClient) { 
    this.cartProduts=new BehaviorSubject<Array<any>>(new Array<any>())
  }

  addCart(cart:any){
    this.carts.push(cart);
    this.cartProduts.next(this.carts);
  }

  getCart(){
    return this.cartProduts;
  }

  removeCart(){
    
  }

  

  


}
