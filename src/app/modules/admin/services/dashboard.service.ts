import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  products=new BehaviorSubject<number>(0);

  constructor(private _http:HttpClient) {
    this.getData();
   }
  
  getData(){
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

}
