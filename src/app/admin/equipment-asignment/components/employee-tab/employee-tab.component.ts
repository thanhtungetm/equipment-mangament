import { Component, EventEmitter, Input,Output } from "@angular/core";
import { IUser } from "../../model/user.model";

@Component({
    selector: "app-employee-tab",
    templateUrl: "./employee-tab.component.html",
    styleUrls: ["./employee-tab.component.scss"]
})
export class EmployeeTabComponent {
    @Input() list!: IUser[];
    @Output() select = new EventEmitter<IUser>()
    currentPage = 0;
    ITEM_PER_PAGE = 5;

    handleSelect(employee: IUser) {
      this.select.emit(employee)
    }
}
