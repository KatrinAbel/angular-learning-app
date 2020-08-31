import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // Define isOpen and make it available for property binding outside of Directive by adding 
  // @HostBinding, in parenthesis specify which property it should be bound to
  @HostBinding('class.open') isOpen = false;

  // Listen to click events on elements by adding @HostListener
  // define custom function toggleOpen to simply set isOpen to opposite value
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}