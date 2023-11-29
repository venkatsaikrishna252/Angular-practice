import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Directive({
  selector: '[appRendering]'
})
export class RenderingDirective implements OnInit{

  constructor(private elRef:ElementRef,private render:Renderer2) { 
    
  }

  ngOnInit(): void {
    
  
  }
  
  @HostListener('mouseover') onmouseover(){
    this.render.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'skyblue');

   }

   @HostListener('mouseleave') onmouseleave(){
    this.render.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'pink');

   }

   @HostListener('click') onclick(){
    this.render.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'black');

   }
    
  }


  

