import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private _db:DashboardService) { }

  ngOnInit(): void {
   this._db.getData().pipe(
     map((item:any)=>{
       return item;
     })
   ).subscribe((user:any)=>{
     console.log(user)
   })
  }

}
