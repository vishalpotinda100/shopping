import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartLength!:number;
  wishListLength!:number;
  showCart:boolean=false;
  showWishlist:boolean=false;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getCart().subscribe((cart:any)=>{
      if(cart.length >0){
        this.cartLength=cart.length;
        this.showCart=true;
      }
    })

    this.productService.getWishList().subscribe((wishlist:any)=>{
      if(wishlist.length >0){
        this.wishListLength=wishlist.length;
        this.showWishlist=true;
      }
    })

    
    
  }


}
