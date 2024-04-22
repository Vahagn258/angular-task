import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyDigits]',
  standalone: true
})
export class OnlyDigitsDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent): void {
    const initialValue = this._el.nativeElement.value;
    let newValue = initialValue.replace(/\D+/g, '');
    if (newValue.length > 2) {
      newValue = newValue.slice(0, 2) + ' ' + newValue.slice(2);
    }
    this._el.nativeElement.value = newValue;
    if (initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
