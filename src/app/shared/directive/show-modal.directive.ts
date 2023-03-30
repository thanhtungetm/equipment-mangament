import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: "[showModal]"
})
export class ShowModalDirective {
    @Input() showModal!: "close" | "open";
    constructor(private el: ElementRef) {}

    ngAfterViewInit() {}
    ngOnChanges() {
        if (this.showModal === "open") {
            this.el.nativeElement.style.display = "block";
            setTimeout(() => {
                this.el.nativeElement.classList.add("show");
                this.el.nativeElement.nextSibling.classList.add("show");
            }, 20);
            this.el.nativeElement.nextSibling.classList.remove("d-none");
        } else {
            this.el.nativeElement.classList.remove("show");
            this.el.nativeElement.ontransitionend = () => {
                this.el.nativeElement.style.display = "none";
            };
            this.el.nativeElement.nextSibling.classList.remove("show");
            this.el.nativeElement.nextSibling.ontransitionend = () => {
                this.el.nativeElement.nextSibling.classList.add("d-none");
            };
        }
    }
}
