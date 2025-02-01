import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[custonLabel]',
})
export class CustomLabelDirective implements OnInit {
  private readonly htmlElement?: ElementRef<HTMLElement>;
  constructor(private readonly el: ElementRef<HTMLElement>) {
    // console.log('constructor de la directiva');
    console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('Directiva - ngOnInit');
  }
}
