import { Directive, ElementRef, OnInit, Renderer2, HostListener, RendererStyleFlags2, Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[basicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  @Input() defaultColor: string;
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @HostBinding('style.color') color = this.highlightColor;


  constructor(private elementRef: ElementRef,
              private renderer: Renderer2 ) {
   }

   ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '20px');
   }

   // Accessing to the element in the DOM with Renderer2.
   // HostListener is used to listen when an event occurs in the element HOST
   @HostListener('mouseenter') mouseover( eventData: Event) {
    console.log('enter!');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.highlightColor);
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.defaultColor);
   }

   // Accessing to the element in the DOM with HostBinding.
   // HostBinding set the value to the property which is binded to the HOST properties
   @HostListener('mouseleave') mouseleave( eventData: Event) {
    console.log('leaving');
    this.backgroundColor = this.defaultColor;
    this.color = this.highlightColor;
   }

}
