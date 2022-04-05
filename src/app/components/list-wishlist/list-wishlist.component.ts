import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-wishlist',
  templateUrl: './list-wishlist.component.html',
  styleUrls: ['./list-wishlist.component.scss']
})
export class ListWishlistComponent implements OnInit {

  @Input() wishlist:any;
  constructor() { }

  ngOnInit(): void {
  }

}
