import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Directive({
  selector: '[showCloseBtn]'
})
export class ShowCloseBtnDirective {

  readonly breakpoint$ = this.breakpointObserver
  .observe([Breakpoints.XSmall])

  constructor(private el:ElementRef, private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit(){
    this.breakpoint$.subscribe((data)=>{
      if(!data.matches){
        this.el.nativeElement.classList.add('d-none')
      }else{
        this.el.nativeElement.classList.remove('d-none')
      }
    })
  }

}
