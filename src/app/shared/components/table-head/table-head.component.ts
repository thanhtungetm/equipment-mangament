import { Component, Input, Output, EventEmitter, ViewContainerRef, ViewChild, TemplateRef } from "@angular/core";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { ISortInfo } from "src/app/admin/admin-shared/model/sort-info.model";

@Component({
    selector: "[app-table-head]",
    templateUrl: "./table-head.component.html",
    styleUrls: ["./table-head.component.scss"]
})
export class TableHeadComponent {
    @ViewChild("contentBody", { static: true }) contentBody!: TemplateRef<unknown>;

    @Input() columnList!: { title: string; fieldName?: string }[];

    @Output() currentSortFieldChange = new EventEmitter<ISortInfo>();

    faSort = faSort;

    currentSortField!: string;
    directionSort: "ASC" | "DESC" = "ASC";

    ngAfterViewInit() {
        console.log("content body:", this.contentBody);
    }

    sortBy(field: string) {
        if (this.currentSortField === field) {
            this.directionSort = this.directionSort === "ASC" ? "DESC" : "ASC";
        } else {
            this.directionSort = "ASC";
            this.currentSortField = field;
        }
        const sortData = { field, direction: this.directionSort };
        this.currentSortFieldChange.emit(sortData);
    }
}
