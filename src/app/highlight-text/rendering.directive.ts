import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Directive({
  selector: '[appRendering]'
})
export class RenderingDirective implements OnInit{

  constructor(private elRef:ElementRef,private render:Renderer2) { 
    
  }

  ngOnInit(): void {
    
  
  }

  @HostBinding('style.background') color:string;

  @HostListener('mouseover') onMouseOver(){

    // this.render.setStyle(

    //   this.elRef.nativeElement,
    //   'background',
    //   'skyblue'
    
    // )

    this.color='skyblue';
  }

  @HostListener('mouseleave') onMouseLeave(){

    // this.render.setStyle(

    //   this.elRef.nativeElement,
    //   'background',
    //   'pink'
    
    // )

    this.color='pink';
  }

  @HostListener('click') onClick(){

    // this.render.setStyle(

    //   this.elRef.nativeElement,
    //   'background',
    //   'black'
    
    // )

    this.color='black';
  }
   
    
  }


  

