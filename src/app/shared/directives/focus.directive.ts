import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[yvFocus]'
})
export class FocusDirective implements AfterViewInit {

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.element.nativeElement.focus();
  }
}
