import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'conversion',
})
export class ConversionPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}
  // price | conversion : 'USD'
  // a pipe should return something always
  transform(value: number, code: string = 'INR') {
    if (isNaN(value)) return null;
    if (code === 'INR') return value;
    return this.currencyService.getValueByCode(code, value);
  }
}
