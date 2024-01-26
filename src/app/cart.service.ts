import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data:any =[];

  constructor(private product:ProductService) {
  }

  getcartData(){
    const arr1 = this.data;
     const arr2 = this.product.checkoutdata;
    const result = arr1.map((val:any) => {
    return Object.assign({}, val, arr2.filter((v:any) => v.Id == val.id)[0]);
  });
  return result; 
  }
}
