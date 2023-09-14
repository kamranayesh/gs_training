import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  // value | discount : arg1 : arg2
  // transform function gets called only when any of the arguments have changed
  transform(price: number, actualPrice: number) {
    const disc = this.calculateDiscount(price, actualPrice);
    return disc === 0 ? null : `${disc.toFixed(0)}% off`;
  }
  calculateDiscount(price: number, actualPrice: number): number {
    if (actualPrice !== price) {
      return (Math.abs(price - actualPrice) / actualPrice) * 100;
    } else {
      return 0; // No discount or negative discount
    }
  }
}
