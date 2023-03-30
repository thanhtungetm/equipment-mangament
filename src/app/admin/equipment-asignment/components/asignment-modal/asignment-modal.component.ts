import { Component, EventEmitter, Output } from "@angular/core";
import { IEquipment } from "src/app/admin/equipment/model/equipment.model";
import { UtilHelper } from "src/app/helper/utils.helper";
import { IConcreteEquipment } from "../../model/concrete-equipment.model";
import { IUser } from "../../model/user.model";
import { EquipmentAsignmentService } from "../../services/equipment-asignment.service";

@Component({
    selector: "app-asignment-modal",
    templateUrl: "./asignment-modal.component.html",
    styleUrls: ["./asignment-modal.component.scss"]
})
export class AsignmentModalComponent {
    @Output() close = new EventEmitter();
    @Output() success = new EventEmitter();

    status: "close" | "open" = "open";
    employee: IUser | null = null;
    concrete: IConcreteEquipment | null = null;
    equipment: IEquipment | null = null;

    showSuccess = false;
    showError = false;

    expiredDate = new Date().toISOString().split("T")[0];

    constructor(private equipmentAsignmentService: EquipmentAsignmentService) {}

    ngOnInit() {
        this.employee = this.equipmentAsignmentService.getEmployee();
        this.concrete = this.equipmentAsignmentService.getConcrete();
        this.equipment = this.equipmentAsignmentService.getEquipment();
    }

    onClose() {
        this.close.emit();
    }
    

    asign() {
        if (!this.isValid()) return;
        const asignmentData = {
            expiredAt: this.expiredDate,
            userId: this.employee!.id,
            concreteEquipmentId: this.concrete!.id
        };
        console.log("Assign data:", asignmentData);
        this.equipmentAsignmentService.asignEquipment(asignmentData).subscribe((data) => {
            console.log("Assign successfully!");
            this.equipmentAsignmentService.newAssigment(this.employee!.id)
            this.success.emit()
            this.onClose()
        });
    }

    isValid(): boolean {
        if (!UtilHelper.checkExpiredDate(this.expiredDate)) {
            this.showError = true;
            return false;
        }
        return true;
    }
}
