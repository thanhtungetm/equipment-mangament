import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[toggleNav]'
})
export class TogglenavDirective {
  @Input() toggleNav! : boolean
  constructor(private el : ElementRef) { }

  ngOnChanges(){
    if(this.toggleNav){
      this.el.nativeElement.classList.add('open')
    }else{
      this.el.nativeElement.classList.remove('open')
    }
    
  }

}
