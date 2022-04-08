import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  payment:number=23455558;
  products!:number;
  constructor(private _dashboardService:DashboardService) { }

  ngOnInit(): void {
    this._dashboardService.products.subscribe((product:any)=>{
      this.products=product;
    })
  }

}
