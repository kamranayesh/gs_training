import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() currentCurrencyCode!: string;
  @Input({ required: true }) data!: ProductType;
  @Output() btnClick = new EventEmitter();
  notifyParent(event: MouseEvent) {
    console.log(event);
    this.btnClick.emit({
      id: this.data.productId,
      name: this.data.productName,
    });
  }
  discountCalculation() {
    console.log('discount calculation');
    return '70% off';
  }
  detectChangeDetection() {
    console.log('product change detected');
  }
}
