import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss']
})
export class ProductListCardComponent implements OnInit {

  @Input() products:any;
  constructor() { }

  ngOnInit(): void {
  }

}
