import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') hasClass: boolean = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.hasClass = this.elementRef.nativeElement.contains(event.target)
      ? !this.hasClass
      : false;
  }

  constructor(private elementRef: ElementRef) {}
}
