import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartProduts=new Subject<any[]>();
  carts:any[]=new Array<any>();


  constructor() { 
    this.cartProduts=new BehaviorSubject<Array<any>>(new Array<any>())
  }

  addCart(cart:any){
    this.carts.push(cart);
    this.cartProduts.next(this.carts);
  }

  getCart(){
    return this.cartProduts;
  }

  removeCart(id:number){
    const filterCart = this.carts.splice(id,1);
    this.cartProduts.next(this.carts);
   
  }

  

  


}
