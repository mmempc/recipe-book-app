import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {



  constructor(private elRef:ElementRef) {


   }


   @HostListener('click') clk(){

    this.elRef.nativeElement.classList.toggle('open')
   }

}
