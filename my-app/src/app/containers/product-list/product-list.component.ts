import {
  Component,
  DestroyRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [
    // local scope
    // the object will exist only till the component is in use
    ProductService,
  ],
})
export class ProductListComponent {
  currencyCode!: string;
  someOtherData = 'test';
  plist: ProductType[] = [];
  currency$!: Subscription;
  destroyRef = inject(DestroyRef);
  curr$: Observable<string>;
  product$: Observable<ProductType[]>;
  constructor(
    private productService: ProductService,
    private currencyService: CurrencyService,
    private router: Router
  ) {
    this.curr$ = this.currencyService.currencyObservable;
    this.product$ = this.productService.getProducts();
  }
  addItem(data: any) {
    console.log('add item to cart', data);
    // this.router.navigateByUrl('/cart');
    this.router.navigate(['/cart']);
  }
  ngOnInit(): void {
    // this.getData();
    // this.currency$ =this.currencyService.currencyObservable.subscribe((code) => (this.currencyCode = code));
    this.currencyService.currencyObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((code) => (this.currencyCode = code));
  }
  ngOnDestroy(): void {
    // this.currency$.unsubscribe();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  // getData() {
  //   this.loading=true;
  //   this.productService.getProducts().subscribe(
  //     (data) => {
  //       console.log('success', data);
  //       this.plist = data;
  //       this.loading=false;
  //     },
  //     (err) => {
  //       console.log('error', err);
  //       this.loading=false;
  //     }
  //   );
  // }

  updatePrice() {
    const product = this.plist[0];
    product.productSalePrice = 950;
    // new copy of plist[0]
    this.plist = [{ ...product }, this.plist[1]];
    // this.someOtherData = 'hello';
  }

  detectChangeDetection() {
    console.log('product list change detected');
  }
}
