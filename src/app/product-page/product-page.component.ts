import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  products: any;
  checkoutId:any;
  Quantity:any;
  productPrice: any;
  constructor(private product: ProductService , private routes: Router ,private cart:CartService) {}

  ngOnInit() {
    this.products = this.product.checkoutdata;
  }
  
  addItem(id:any,quantity:any) {
    let productId:any = document.getElementById(`Quantity${id}`)
    let productData:any = productId?.value
    if(productData=='') productData='1'
    this.cart.data.push({id:id,productData})
    console.log(this.cart.getcartData())    
    // this.routes.navigate(['cart'])

  }
  
  checkout(id:any) {
    let productId:any = document.getElementById(`Quantity${id}`)
    let productData:any = productId?.value
    if(productData=='') productData='1'
    this.routes.navigate(['test',{Id:id,quantity:productData}])
  }

  // calculatePrice(id:any){
  //   this.productPrice = document.getElementById(`Quantity${id}`)
  //   this.productPrice = this.productPrice.value
  //   console.log(this.productPrice)
  // }
}
