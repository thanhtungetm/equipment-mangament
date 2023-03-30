import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { EmployeeFilterComponent } from "./components/employee-filter/employee-filter.component";

@NgModule({
    declarations: [EmployeeFilterComponent],
    imports: [CommonModule, SharedModule],
    exports: [EmployeeFilterComponent]
})
export class AdminSharedModule {}
