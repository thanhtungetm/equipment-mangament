import { Component, Input } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { IConcreteEquipment } from "src/app/admin/equipment-asignment/model/concrete-equipment.model";
import { EquipmentAsignmentService } from "src/app/admin/equipment-asignment/services/equipment-asignment.service";
import { EquipmentService } from "src/app/shared/services/equipment.service";
import { IEquipment } from "../../model/equipment.model";

@Component({
    selector: "app-concrete-modal",
    templateUrl: "./concrete-modal.component.html",
    styleUrls: ["./concrete-modal.component.scss"]
})
export class ConcreteModalComponent {
    faTimes = faTimes;
    status: "close" | "open" = "open";

    @Input() equipment: IEquipment | null = null;

    list: IConcreteEquipment[] = [];
    currentPage = 0;
    ITEM_PER_PAGE = 5;

    currentConcrete : IConcreteEquipment | null = null

    addConcreteModel = { price: 0 };

    showAddConcrete = false;
    showSuccess = false;
    showWarning = false;

    constructor(private equipmentService: EquipmentService, private equipmentAsignmentService: EquipmentAsignmentService) {}

    ngOnChanges() {}

    ngOnInit() {
        console.log("current equipment:", this.equipment);
        this.getConcreteEquipments();
    }

    getConcreteEquipments() {
        if (this.equipment)
            this.equipmentService.getConcreteEquipments(this.equipment.id).subscribe((data) => {
                this.list = data;
            });
    }

    addConcrete() {
        this.equipmentService.createConcrete(this.equipment!.id, this.addConcreteModel.price).subscribe((data) => {
            console.log("Create concrete successfully!");
            this.addConcreteModel.price = 0;
            this.showSuccess = true;
            this.getConcreteEquipments();
        });
    }

    openDeleteWarning(concrete: IConcreteEquipment) {
        this.showWarning = true;
        this.currentConcrete = concrete
    }

    deleteConcrete(choose: boolean) {
        this.showWarning = false;
        if (choose) {
            this.equipmentService.deleteConcrete(this.currentConcrete!.id).subscribe((data) => {
                console.log("Delete concrete successfully!");
                this.getConcreteEquipments();
            });
        }
    }

    toggle() {
        this.status = this.status === "close" ? "open" : "close";
    }
}
