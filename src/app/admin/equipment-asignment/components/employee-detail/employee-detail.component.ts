import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { EmployeeService } from "src/app/shared/services/employee.service";
import { IConcreteEquipment } from "../../model/concrete-equipment.model";
import { IUser } from "../../model/user.model";
import { IAssignEquipment } from "../../model/user.model copy";
import { EquipmentAsignmentService } from "../../services/equipment-asignment.service";

@Component({
    selector: "app-employee-detail",
    templateUrl: "./employee-detail.component.html",
    styleUrls: ["./employee-detail.component.scss"]
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
    @Input() employee: IUser | null = null;

    list: IAssignEquipment[] = [];
    currentConcrete: IAssignEquipment | null = null;
    currentPage = 0;
    ITEM_PER_PAGE = 5;

    showDetail = false;
    showWarning = false;
    newAssignmentSub!: Subscription;

    constructor(private employeeService: EmployeeService, private equipmentAsignmentService: EquipmentAsignmentService) {}

    ngOnInit() {
        this.getAssignedEquipments();
        this.newAssignmentSub = this.equipmentAsignmentService.newAssignment$.subscribe((id) => {
          console.log("Id assign:", id,this.employee?.id)
            if (id === this.employee?.id) {
                this.getAssignedEquipments();
            }
        });
    }

    ngOnDestroy(): void {
        this.newAssignmentSub.unsubscribe();
    }

    getAssignedEquipments() {
        if (this.employee) {
            this.employeeService.getAssignedEquipments(this.employee.id).subscribe((data) => {
                console.log("List:", data);

                this.list = data;
            });
        }
    }

    openDetail(concrete: IAssignEquipment) {
        this.currentConcrete = concrete;
        this.showDetail = true;
    }
    closeDetail() {
        console.log("Close");

        this.showDetail = false;
    }
    openRevokeWarning(concrete: IAssignEquipment) {
        this.showWarning = true;
        this.currentConcrete = concrete;
    }
    revokeEquipment(choose: boolean) {
        this.showWarning = false;
        if (choose) {
            this.equipmentAsignmentService.revokeEquipment(this.currentConcrete!.id).subscribe((data) => {
                console.log("Revoke successfully!");
                this.getAssignedEquipments();
                this.equipmentAsignmentService.revokeAssignment(this.currentConcrete!.equipmentName)
            });
        }
    }
}
