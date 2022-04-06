import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _http:HttpClient) { }
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
