import { Injectable } from "@angular/core";
import { IEquipment } from "../../equipment/model/equipment.model";
import { IConcreteEquipment } from "../model/concrete-equipment.model";
import { IUser } from "../model/user.model";

@Injectable({
    providedIn: "any"
})
export class ConcreteEquipmentService {
    private user: IUser | null = null;
    private equipment: IEquipment | null = null;
    private concreteEquipment: IConcreteEquipment | null = null;

    constructor() {}

    selectUser(user: IUser) {
        this.user = user;
    }

    selectEquipment(equipment: IEquipment) {
        this.equipment = equipment;
    }

    selectConcreteEquipment(concreteEquipment: IConcreteEquipment) {
        this.concreteEquipment = concreteEquipment;
    }

    getUser() {
        return this.user;
    }
    getEquipment() {
        return {
            equipment: this.equipment,
            concreteEquipment: this.concreteEquipment
        };
    }
}
