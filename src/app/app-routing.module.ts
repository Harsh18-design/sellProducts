import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent // this is the component with the <router-outlet> in the template
  },
  {
    path: 'test',
    component: CheckoutComponent // this is the component with the <router-outlet> in the template
  },
  {
    path: 'cart',
    component: CartComponent // this is the component with the <router-outlet> in the template
  },
  {
    path: 'order',
    component: OrderComponent // this is the component with the <router-outlet> in the template
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
