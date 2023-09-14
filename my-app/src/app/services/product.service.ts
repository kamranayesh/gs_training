import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatProduct, ProductType } from 'src/types';
// @Injectable({
//   providedIn: 'root', // alternative method to register it globally
// })
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getHomePageProducts() {
    return this.http.get<CatProduct[]>('https://fakestoreapi.com/products');
  }

  getProducts() {
    const url =
      'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.http.get<ProductType[]>(url);
  }
}
