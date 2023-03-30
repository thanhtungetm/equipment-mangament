import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-pagination",
    templateUrl: "./pagination.component.html",
    styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent {
    @Input() length!: number;
    @Input() currentPage!: number;
    @Input() itemPerPage!: number;
    @Input() noneGoto? = false

    @Output() currentPageChange = new EventEmitter<number>();

    total!: number;
    err: boolean = false;

    constructor() {}

    ngOnChanges() {
        this.total = Math.ceil(this.length / this.itemPerPage);
    }

    changePage(page: number) {
        this.err = false;
        this.currentPageChange.emit(page);
    }

    goToPage(pageInput: any) {
        if (!pageInput.value) {
            this.err = true;
            return;
        }
        const page = Number(pageInput.value);

        if (page <= 0 || page > this.total) {
            this.err = true;
            return;
        }
        if (page - 1 !== this.currentPage) {
            this.currentPageChange.emit(page - 1);
        }
        this.err = false;
    }
}
