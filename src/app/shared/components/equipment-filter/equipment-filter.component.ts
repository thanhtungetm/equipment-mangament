import { Component } from "@angular/core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { IDeviceBrand } from "src/app/admin/equipment/model/device-brand.model";
import { IDeviceType } from "src/app/admin/equipment/model/device-type.model";
import { IEquipmentFilter } from "src/app/admin/equipment/model/equiment-filter.model";
import { EquipmentService } from "src/app/shared/services/equipment.service";
import { EquipmentFilterService } from "../../../admin/admin-shared/services/equipment-filter.service";


@Component({
    selector: "app-equipment-filter",
    templateUrl: "./equipment-filter.component.html",
    styleUrls: ["./equipment-filter.component.scss"]
})
export class EquipmentFilterComponent {
    deviceTypeList: IDeviceType[] = [];
    brandList: IDeviceBrand[] = [];
    faFilter = faFilter;

    filter!: IEquipmentFilter;

    constructor(private equipmentService: EquipmentService, private equipmentFilterService: EquipmentFilterService) {}

    ngOnInit() {
        this.equipmentService.getAllDeviceTypes().subscribe({
            next: (data) => {
                console.log("Device:", data);
                this.deviceTypeList = data;
            }
        });
    }

    handleChangeDeviceType(event: Event) {
        const deviceType = (event.target as HTMLSelectElement).value;
        if (deviceType === "") {
            console.log("Fetch All Type");
            this.brandList = [];
        } else {
            this.equipmentService.getDeviceBrandsOfDeviceType(Number(deviceType)).subscribe(
                (list) => {
                    this.brandList = list;
                    console.log("Brand List", list);
                },
                (err) => (this.brandList = [])
            );
        }
        this.equipmentFilterService.changeFilter({ ...this.equipmentFilterService.getFilter(), deviceType, deviceBrand: "" });
    }
    handleChangeDeviceBrand(event: Event) {
        const deviceBrand = (event.target as HTMLSelectElement).value;
        this.equipmentFilterService.changeFilter({ ...this.equipmentFilterService.getFilter(), deviceBrand });
    }
}
