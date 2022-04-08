import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http:HttpClient) { }
  
  getData(){
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

}
