import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  codes = ['INR', 'USD', 'GBP', 'EUR'];
  // @Output() currencySelected = new EventEmitter();
  constructor(private currencyService: CurrencyService) {}
  ngOnInit(): void {
    this.currencyService.checkCacheNFetch().subscribe((d) => (this.codes = d));
  }

  getSelectedCode(event: Event) {
    const ele = event.target as HTMLSelectElement;
    // this.currencySelected.emit(ele.value);
    this.currencyService.updateCurrency(ele.value);
  }
}
