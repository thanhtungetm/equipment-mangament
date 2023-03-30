import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EquipmentService } from "src/app/shared/services/equipment.service";
import { IEquipment } from "../../model/equipment.model";
import { EquipmentFormComponent } from "../equipment-form/equipment-form.component";


@Component({
    selector: "app-update-equipment",
    templateUrl: "./update-equipment.component.html",
    styleUrls: ["./update-equipment.component.scss"]
})
export class UpdateEquipmentComponent {
    status: "close" | "open" = "open";

    @Input() equipment: IEquipment | null = null;
    @Output() success = new EventEmitter();

    showWarning: boolean = false;
    showSuccess: boolean = false;
    showError: boolean = false;

    @ViewChild(EquipmentFormComponent) form!: EquipmentFormComponent;

    constructor(private fb: FormBuilder, private equipmentService: EquipmentService) {}

    ngOnInit(): void {}

    toggle() {
        if (!this.form.isPristine()) {
            this.showWarning = true;
            return;
        }
        this.status = this.status === "close" ? "open" : "close";
    }

    submit(form: FormGroup) {
        const udpate = form.value;
        const formData = new FormData();
        console.log("Form", form);

        for (let key in udpate) {
            if (!form.controls[key].pristine || form.controls[key].touched) {
                formData.append(key, udpate[key]);
                console.log(key, udpate[key]);
            }
        }

        this.equipmentService.updateEquipment(this.equipment!.id, formData).subscribe(
            (data) => {
                console.log("update successfully", data);
                this.showSuccess = true;
            },
            (err) => {
                console.error(err);
                this.showError = true;
            }
        );
    }

    handleAnwserFromWarning(choose: boolean) {
        console.log("Choose:", choose);
        this.showWarning = false;
        if (choose) {
            this.status = "close";
            return;
        }
    }
    handleCloseSuccess() {
        this.status = "close";
        this.success.emit();
    }
}
