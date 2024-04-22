import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBadge]',
  standalone: true
})
export class BadgeDirective {

  @Input('appBadge') badgeColor?: string;
  @Input() badgeNumber?: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const badge = this.renderer.createElement('span');
    this.renderer.addClass(badge, 'badge');
    this.renderer.setStyle(badge, 'background-color', this.badgeColor || 'red');
    this.renderer.appendChild(badge, this.renderer.createText(`${this.badgeNumber}`));

    this.renderer.addClass(this.el.nativeElement, 'badge-container');
    this.renderer.appendChild(this.el.nativeElement, badge);
  }

}
