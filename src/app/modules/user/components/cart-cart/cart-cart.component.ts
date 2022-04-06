import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-cart',
  templateUrl: './cart-cart.component.html',
  styleUrls: ['./cart-cart.component.scss']
})
export class CartCartComponent implements OnInit {
  @Input() cart:any;
  constructor() { }

  ngOnInit(): void {
  }


}
