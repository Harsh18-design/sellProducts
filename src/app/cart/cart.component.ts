import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartProducts: any;
  productQuantity: any;
  price: any;
  checkoutObj:any=[];
  constructor(private cart: CartService, private product: ProductService, private routes:Router) {}

  ngOnInit() {
    this.cartProducts = this.cart.getcartData();
  }
  calculatePrice() {
    let total: any = 0;
    for (let id = 1; id <= this.cartProducts.length; id++) {
      this.productQuantity = document.getElementById(`Quantity${id}`);
      total += Number(this.productQuantity?.value);
    }
    return total.toString();
  }

  calculateValue(idVal: any, price: any) {
    let productQuantity: any = document.getElementById(`Quantity${idVal}`);
    return price * productQuantity?.value;
  }

  checkoutCart(){
    for(let ci=1;ci<=this.cartProducts.length;ci++){
      let Quantity:any = document.getElementById(`Quantity${ci}`);
      Quantity = Quantity?.value
      let Price:any = document.getElementById(`Price${ci}`);
      Price = Price?.innerHTML
      let Title:any = document.getElementById(`Title${ci}`);
      Title = Title?.innerHTML
      this.checkoutObj.push({Quantity,Price,Title,id:ci})
    }
    this.routes.navigate(['test',{cartCheckout:JSON.stringify(this.checkoutObj)}])
  }
}
