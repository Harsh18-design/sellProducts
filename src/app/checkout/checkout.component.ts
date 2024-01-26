import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
data:any;
filteredData: any;
Quantity:any='';
checkoutCart:any;
mapSub:any=[];

constructor(private product: ProductService ,  private route: ActivatedRoute, private router: Router ) {
}
products: any;

ngOnInit(){
  const itemId = this.route.snapshot.paramMap.get('Id');
  this.Quantity = this.route.snapshot.paramMap.get('quantity');
  this.checkoutCart = this.route.snapshot.paramMap.get('cartCheckout');
  this.checkoutCart = JSON.parse(this.checkoutCart)
  this.products = this.product.checkoutdata;
  this.filteredData = this.products.filter((a:any)=>a.Id == itemId);
  let mapTotal = this.checkoutCart.map((c:any)=>c.Price);
  for (let i = 0; i < this.checkoutCart.length; i++) this.mapSub.push(parseInt(mapTotal[i]))
  this.mapSub = this.mapSub.reduce((s:any,a:any)=>s+a,0)
  if(this.mapSub==0) this.mapSub = ''
  else this.mapSub='Total:'+this.mapSub+'Rs'
}

confirm(){
  alert('Order Placed Successfuly')
  this.router.navigate(['order'])
}
}
