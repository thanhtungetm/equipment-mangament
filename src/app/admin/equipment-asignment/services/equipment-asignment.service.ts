import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { AsignmentAPI } from "src/api/assignment/asignment.api";
import { IEquipment } from "../../equipment/model/equipment.model";
import { IConcreteEquipment } from "../model/concrete-equipment.model";
import { IUser } from "../model/user.model";

@Injectable({
    providedIn: "any"
})
export class EquipmentAsignmentService {
    private _employee: IUser | null = null;
    private _equipment: IEquipment | null = null;
    private _concreteEquipment: IConcreteEquipment | null = null;

    newAssignment$ = new Subject();
    revokeAssignment$ = new Subject();

    constructor(private asignmentAPI: AsignmentAPI) {}

    setEmployee(employee: IUser) {
        this._employee = employee;
    }

    setEquipment(equipment: IEquipment) {
        this._equipment = equipment;
    }

    setConcreteEquipment(concrete: IConcreteEquipment) {
        this._concreteEquipment = concrete;
    }

    getConcreteInfo(id: number) {
        return this.asignmentAPI.getConcreteInfo(id).pipe(map((data: any) => data[0]));
    }

    asignEquipment(data: { concreteEquipmentId: number; expiredAt: string; userId: number }) {
        return this.asignmentAPI.assignEquipment(data);
    }

    revokeEquipment(id: number) {
        return this.asignmentAPI.revokeEquipment(id);
    }

    getEmployee() {
        return this._employee;
    }

    getConcrete() {
        return this._concreteEquipment;
    }
    getEquipment() {
        return this._equipment;
    }
    revokeAssignment(equipmentName: string) {
        this.revokeAssignment$.next(equipmentName);
    }
    newAssigment(id: number) {
        this.newAssignment$.next(id);
    }
}
