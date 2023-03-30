import { Component } from "@angular/core";
import { EmployeeFilterService } from "src/app/admin/admin-shared/services/employee-filter.service";
import { EmployeeFrame } from "src/app/helper/constant.helper";
import { EmployeeService } from "src/app/shared/services/employee.service";
import { IUser } from "../../model/user.model";
import { EquipmentAsignmentService } from "../../services/equipment-asignment.service";

@Component({
    selector: "app-employee-frame",
    templateUrl: "./employee-frame.component.html",
    styleUrls: ["./employee-frame.component.scss"]
})
export class EmployeeFrameComponent {
    EmployeeFrame = EmployeeFrame;
    currentTab: EmployeeFrame = EmployeeFrame.EMPLOYEE_TAB;
    list: IUser[] = [];
    currentEmployee: IUser | null = null;

    constructor(
        private employeetService: EmployeeService,
        private employeeFilterService: EmployeeFilterService,
        private equipmentAsignmentService: EquipmentAsignmentService
    ) {}

    ngOnInit() {
        this.getEmployee();
        this.employeeFilterService.employeetFilter$.subscribe((filter) => {
            this.list = this.employeetService.filterList(filter);
            console.log("Filter:", filter);
        });
    }

    getEmployee() {
        this.employeetService.getEmployee().subscribe({
            next: (data) => {
                console.log("End component:", data);
                this.list = data;
            }
        });
    }
    selectEmployee(employee: IUser) {
        this.currentEmployee = employee;
        this.equipmentAsignmentService.setEmployee(employee);
        this.currentTab = EmployeeFrame.EMPLOYEE_DETAIL_TAB;
    }
}
