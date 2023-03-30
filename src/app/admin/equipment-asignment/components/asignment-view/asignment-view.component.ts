import { Component, EventEmitter, Input, Output } from "@angular/core";
import { EmployeeService } from "src/app/shared/services/employee.service";
import { IConcreteInfo } from "../../model/concrete-info.model";
import { IUser } from "../../model/user.model";
import { EquipmentAsignmentService } from "../../services/equipment-asignment.service";

@Component({
    selector: "app-asignment-view",
    templateUrl: "./asignment-view.component.html",
    styleUrls: ["./asignment-view.component.scss"]
})
export class AsignmentViewComponent {
    @Input() concreteInfo: IConcreteInfo | null = null;
    @Output() close = new EventEmitter();

    employee: IUser | null = null;

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        if (this.concreteInfo) {
            this.employeeService.getEmployeeById(this.concreteInfo.userId).subscribe((data) => {
                console.log(data);
                this.employee = data;
            });
        }
    }

    onClose() {
        this.close.emit();
    }
}
