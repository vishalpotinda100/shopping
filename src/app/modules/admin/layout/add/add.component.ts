import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  productForm!:FormGroup;
  isTitle:boolean=false;
  id:Date=new Date();
  constructor(private _productService:ProductsService,private router:Router) { }
  
  

  ngOnInit(): void {
    this.productForm=new FormGroup({
      'id':new FormControl(this.id.getTime()+Math.floor(Math.random()*100000)),
      'title':new FormControl('',[Validators.required]),
      'description':new FormControl(null,[Validators.required]),
      'price':new FormControl(null,[Validators.required,Validators.minLength(1) ,Validators.min(1)]),
      'category':new FormControl(null,[Validators.required]),
      'thumbnail':new FormControl(null,[Validators.required])
    })

  }

  onSubmit(){
      console.log(this.productForm.value)
        this._productService.addProudct(this.productForm.value);
     
  }

}
