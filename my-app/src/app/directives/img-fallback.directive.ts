import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'img',
  // using generic selectors will apply the directive behavior to the element by default
})
export class ImgFallbackDirective {
  constructor() {}

  @HostListener('error', ['$event'])
  switchToFallback(event: Event) {
    const imgTag = event.target as HTMLImageElement;
    imgTag.src =
      'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081';
  }
}
