import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {

  constructor(private elRef:ElementRef) { }
  ngOnInit(): void {
    (this.elRef.nativeElement as HTMLElement).style.background='grey';
  }

}
