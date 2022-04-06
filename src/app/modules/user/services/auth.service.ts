import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../Model/Register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

    registerUser(user:Register){
        this._http.post("https://shopping-angular-39a9b-default-rtdb.firebaseio.com/carts.json",user) 
                  .subscribe((user:Register)=>{
                    console.log(user);
                  })
    }
}
