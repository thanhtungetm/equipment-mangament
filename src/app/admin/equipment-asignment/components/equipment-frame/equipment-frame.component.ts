import { Component } from "@angular/core";
import { EquipmentFilterService } from "src/app/admin/admin-shared/services/equipment-filter.service";
import { IEquipment } from "src/app/admin/equipment/model/equipment.model";
import { EquipmentFrame } from "src/app/helper/constant.helper";
import { EquipmentService } from "src/app/shared/services/equipment.service";
import { EquipmentAsignmentService } from "../../services/equipment-asignment.service";

@Component({
    selector: "app-equipment-frame",
    templateUrl: "./equipment-frame.component.html",
    styleUrls: ["./equipment-frame.component.scss"],
    providers: [EquipmentFilterService]
})
export class EquipmentFrameComponent {
    EquipmentFrame = EquipmentFrame;

    currentTab: EquipmentFrame = EquipmentFrame.EQUIPMENT_TAB;

    list: IEquipment[] = [];
    currentEquipment: IEquipment | null = null;

    constructor(
        private equipmentService: EquipmentService,
        private equipmentFilterService: EquipmentFilterService,
        private equipmentAsignmentService: EquipmentAsignmentService
    ) {}

    ngOnInit() {
        this.getEquipments();
        this.equipmentFilterService.equimentFilter$.subscribe((filter) => {
            this.list = this.equipmentService.filterList(filter);
            console.log("Filter:", filter);
        });
    }

    getEquipments() {
        this.equipmentService.getEquipments().subscribe({
            next: (data) => {
                console.log("End component:", data);
                this.list = data;
            }
        });
    }
    selectEquipment(equipment: IEquipment) {
        this.currentEquipment = equipment;
        this.equipmentAsignmentService.setEquipment(equipment);
        this.currentTab = EquipmentFrame.CONCRETE_EQUIPMENT_TAB;
    }
}
