import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { HomeComponent } from './containers/home/home.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  // abc.com
  { path: '', component: DemoComponent },
  // abc.com/products
  { path: 'products', component: ProductListComponent },
  // abc.com/detail/100
  { path: 'detail/:pid', component: ProductDetailComponent },
  // abc.com/github
  { path: 'github', component: GithubSearchComponent },
  // abc.com/checkout
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
  // abc.com/user
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  // abc.com/orders
  {
    path: 'orders',
    loadChildren: () =>
      import('./user/orders/orders.module').then((m) => m.OrdersModule),
  },
  // 404 page : this is always the last one in the sequence
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    // component, directive, pipe, module
    RouterModule,
  ],
})
export class AppRoutingModule {}
