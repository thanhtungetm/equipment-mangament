import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[toggleOverplay]'
})
export class ToggleOverplayDirective {

  readonly breakpoint$ = this.breakpointObserver
  .observe([Breakpoints.XSmall])

  constructor(private el: ElementRef, private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit(){
    console.log("a",this.el);
    let display : string
    this.breakpoint$.subscribe((data)=>{
      if(!data.matches){
        console.log("Matched");
        display = this.el.nativeElement.style.display
        this.el.nativeElement.style.display = 'none'
      }else{
        this.el.nativeElement.style.display = display
      }
    })
  }

}
