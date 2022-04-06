import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.scss']
})
export class WishlistCardComponent implements OnInit {
  @Input() wishlist:any;
  constructor() { }

  ngOnInit(): void {
  }

}
