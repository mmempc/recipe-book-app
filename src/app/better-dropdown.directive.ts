import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterDropdownDirective]',
})
export class BetterDropdownDirective {
  @HostBinding('class.open') classToggle = false;

  constructor() {}

  @HostListener('click') clickToggle(){

this.classToggle = !this.classToggle;    
  }
}
