import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wishlist',
  templateUrl: './card-wishlist.component.html',
  styleUrls: ['./card-wishlist.component.scss']
})
export class CardWishlistComponent implements OnInit {
  @Input() cart:any;
  constructor() { }

  ngOnInit(): void {
  }

}
