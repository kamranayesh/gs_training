import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root', // equivalent of adding it in app.module.ts providers
})
export class CurrencyService {
  private _code: string = 'INR';
  private currencySubject = new BehaviorSubject<string>(this._code);
  private _rates!: any;
  private _codes!: string[];
  // to get the currency code, one needs to subscribe to this observable
  currencyObservable: Observable<string> = this.currencySubject.asObservable();

  constructor(private http: HttpClient) {
    this.rehydrate();
  }

  checkCacheNFetch() {
    if (!this._rates || !this._codes) {
      return this.getForexData().pipe(map((d) => d.rates));
    } else {
      return of(this._codes);
    }
  }

  getValueByCode(code: string, value: number = 0) {
    try {
      return this._rates[code] * value;
    } catch (e) {
      console.log(e);
      return value;
    }
  }

  getForexData() {
    const url =
      'https://api.forexrateapi.com/v1/latest?api_key=67bff5131577b34269af30ef8d149345&base=INR';
    return this.http.get(url).pipe(
      map((data: any) => {
        return { rates: data.rates, codes: Object.keys(data.rates) };
      }),
      tap((d) => {
        const { rates, codes } = d;
        this._codes = codes;
        this._rates = rates;
        this.cacheData();
      })
    );
  }

  cacheData() {
    localStorage.setItem('rates', JSON.stringify(this._rates));
    localStorage.setItem('codes', JSON.stringify(this._codes));
  }

  rehydrate() {
    if (localStorage.getItem('currency')) {
      this._code = localStorage.getItem('currency') as string;
      this.currencySubject.next(this._code);
    }
    if (localStorage.getItem('rates')) {
      this._rates = JSON.parse(localStorage.getItem('rates') as string);
    }
    if (localStorage.getItem('codes')) {
      this._codes = JSON.parse(localStorage.getItem('codes') as string);
    }
  }
  // to make data changes
  updateCurrency(code: string) {
    this._code = code;
    this.persistNnotifyData();
  }
  persistNnotifyData() {
    localStorage.setItem('currency', this._code);
    // on every data change, we should give a notification
    this.currencySubject.next(this._code);
  }
}
