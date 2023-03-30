import { Component, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { IEquipment } from "src/app/admin/equipment/model/equipment.model";
import { EquipmentService } from "src/app/shared/services/equipment.service";
import { IConcreteEquipment } from "../../model/concrete-equipment.model";
import { IConcreteInfo } from "../../model/concrete-info.model";
import { EquipmentAsignmentService } from "../../services/equipment-asignment.service";

@Component({
    selector: "app-concrete-equipment-tab",
    templateUrl: "./concrete-equipment-tab.component.html",
    styleUrls: ["./concrete-equipment-tab.component.scss"]
})
export class ConcreteEquipmentTabComponent {
    @Input() equipment: IEquipment | null = null;

    list: IConcreteEquipment[] = [];
    currentPage = 0;
    ITEM_PER_PAGE = 5;

    showAsignment = false;
    showWarning = false;
    showConcreteView = false

    concreteInfo : IConcreteInfo | null = null

    revokeAssignmentSub!: Subscription;

    constructor(private equipmentService: EquipmentService, private equipmentAsignmentService: EquipmentAsignmentService) {}

    ngOnChanges() {}

    ngOnInit() {
        this.getConcreteEquipments();
        if (this.equipment) {
            this.revokeAssignmentSub = this.equipmentAsignmentService.revokeAssignment$.subscribe((eqipmentName) => {
                console.log("Id assign:", eqipmentName, this.equipment?.name);
                if (eqipmentName === this.equipment?.name) {
                    this.getConcreteEquipments();
                }
            });
        }
    }

    getConcreteEquipments() {
        if (this.equipment)
            this.equipmentService.getConcreteEquipments(this.equipment.id).subscribe((data) => {
                this.list = data;
            });
    }

    showAsignmentModal(concrete: IConcreteEquipment) {
        console.log("Show asigment");
        this.equipmentAsignmentService.setConcreteEquipment(concrete);
        if (!this.equipmentAsignmentService.getEmployee()) {
            this.showWarning = true;
        } else {
            this.showAsignment = true;
        }
    }

    assignSuccess() {
        this.getConcreteEquipments()
    }

    handleView(id:number){
        this.equipmentAsignmentService.getConcreteInfo(id).subscribe((data)=>{
            this.showConcreteView = true
            this.concreteInfo = data
        })
    }
}
