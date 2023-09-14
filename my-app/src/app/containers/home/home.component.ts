import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService],
})
export class HomeComponent {
  products$ = inject(ProductService).getHomePageProducts();
}
