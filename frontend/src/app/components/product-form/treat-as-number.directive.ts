import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appTreatAsNumber]'
})
export class TreatAsNumberDirective {
  constructor() { }

  @HostListener('keypress', ['$event']) blockNotNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode
    // Allow only number input
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  }
}