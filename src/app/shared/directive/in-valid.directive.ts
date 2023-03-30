import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[inputValid]',
})
export class InValidDirective {
  @Input() inputValid!: boolean;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // console.log("status:", this.inputValid)
    // if (this.inputValid) {
    //   this.el.nativeElement.classList.remove('is-invalid');
    // } else {
    //   this.el.nativeElement.classList.remove('is-valid');
    // }
  }
  ngOnChanges(){
    if (this.inputValid) {
      this.el.nativeElement.classList.remove('is-invalid');
    } else {
      this.el.nativeElement.classList.add('is-invalid');
    }
  }
}
