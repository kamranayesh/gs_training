import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[appNumbersOnly]',
})
export class NumbersOnlyDirective {
  // property : rhs is optional
  // property="value" : angular will not evaluate the right hand side, instead take it as it is, it'll consider it as actual data
  // [property]="value" : angular will evaluate the right hand side, angular will assume rhs is a variable
  // <input type="text" appNumbersOnly />
  // <input type="text" appNumbersOnly="6" />
  // <input type="text" [appNumbersOnly]="variable" />
  @Input() appNumbersOnly!: number | string;
  constructor() {}

  @HostListener('keypress', ['$event'])
  restrictNumbersOnly(event: KeyboardEvent) {
    const inputTag = event.target as HTMLInputElement;
    const length = this.appNumbersOnly ? Number(this.appNumbersOnly) : 10;
    const txtLength = inputTag.value.length;

    if (txtLength >= length || event.keyCode < 48 || event.keyCode > 57) {
      event.preventDefault();
    }
  }
}
