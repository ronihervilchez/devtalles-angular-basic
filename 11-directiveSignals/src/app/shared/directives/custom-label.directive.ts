import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[custonLabel]',
})
export class CustomLabelDirective implements OnInit {
  private readonly htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  constructor(private readonly el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }
}
