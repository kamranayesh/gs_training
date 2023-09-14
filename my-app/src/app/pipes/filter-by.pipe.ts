import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(arr: any[], field: string, value: any) {
    if (!arr || arr.length <= 1) return arr;
  }
}
