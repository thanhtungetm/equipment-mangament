import { Injectable } from "@angular/core";
import { EquipmentAPI } from "src/api/equipment/equipment.api";
import { IEquipment } from "../../admin/equipment/model/equipment.model";
import { tap } from "rxjs";
import { IEquipmentFilter } from "../../admin/equipment/model/equiment-filter.model";
import { ISortInfo } from "src/app/admin/admin-shared/model/sort-info.model";

@Injectable({
    providedIn: "root"
})
export class EquipmentService {
    private _list: IEquipment[] = [];

    constructor(private equipmentAPI: EquipmentAPI) {}

    getEquipments() {
        return this.equipmentAPI.getEquipments().pipe(tap((data) => (this._list = data)));
    }

    createEquipment(equiment: FormData) {
        return this.equipmentAPI.createEquipment(equiment);
    }
    updateEquipment(id: number, equiment: FormData) {
        return this.equipmentAPI.updateEquipment(id, equiment);
    }
    deleteEquipment(equimentId: number) {
        return this.equipmentAPI.deleteEquipment(equimentId);
    }

    getAllDeviceTypes() {
        return this.equipmentAPI.getAllDeviceTypes();
    }
    getDeviceBrandsOfDeviceType(deviceTypeId: number) {
        return this.equipmentAPI.getDeviceBrandsOfDeviceType(deviceTypeId);
    }

    //Concrete equipment
    getConcreteEquipments(equipmentId: number) {
        return this.equipmentAPI.getConcreteEquipments(equipmentId);
    }

    createConcrete(id: number, price: number) {
        return this.equipmentAPI.createConcrete(id, price);
    }

    deleteConcrete(id: number) {
        return this.equipmentAPI.deleteConcrete(id);
    }

    filterList(filter: IEquipmentFilter) {
        return this._list.filter((equipment) => {
            const filterDeviceType = filter.deviceType ? equipment.equipmentBrandDeviceTypeId === Number(filter.deviceType) : true;
            const filterDeviceBrand = filter.deviceBrand ? equipment.equipmentBrandId === Number(filter.deviceBrand) : true;
            if (equipment.name.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()) && filterDeviceType && filterDeviceBrand) return true;
            return false;
        });
    }

    sortBy(sortInfo: ISortInfo) {
        const { field, direction } = sortInfo;
        const filter = field as keyof IEquipment;
        return [
            ...this._list.sort((a: any, b: any) => {
                const negativeOrPositive = direction === "DESC" ? -1 : 1;
                return b[filter] > a[filter] ? -1 : 1 * negativeOrPositive;
            })
        ];
    }

    // changePage(page: number, ITEM_PER_PAGE: number, filter: IEquipmentFilter){
    //     // console.log("From:",page*ITEM_PER_PAGE );
    //     // console.log("To:",page*ITEM_PER_PAGE+ ITEM_PER_PAGE );

    //     return this._list.slice(page*ITEM_PER_PAGE,page*ITEM_PER_PAGE+ ITEM_PER_PAGE)
    // }
}
