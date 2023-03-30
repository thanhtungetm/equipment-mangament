import { Injectable } from "@angular/core";
import { EquipmentAPI } from "src/api/equipment/equipment.api";
import { IEquipment } from "../../admin/equipment/model/equipment.model";
import { tap } from "rxjs";
import { IEquipmentFilter } from "../../admin/equipment/model/equiment-filter.model";
import { UserAPI } from "src/api/user/user.api";
import { IUser } from "src/app/admin/equipment-asignment/model/user.model";
import { IEmployeeFilter } from "src/app/admin/admin-shared/model/employee-filter.model";
import { ISortInfo } from "src/app/admin/admin-shared/model/sort-info.model";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    private _list: IUser[] = [];

    constructor(private employee: UserAPI) {}

    getEmployee() {
        return this.employee.getUsers().pipe(tap((data) => this._list=data));
    }
    getEmployeeById(id:number) {
        return this.employee.getUser(id);
    }

    getAllDepartment(){
        return this.employee.getDepartments()
    }
    getAssignedEquipments(employeeId:number){
        return this.employee.getAssignedEquipments(employeeId)
    }

    createEmployee(data: FormData){
        return this.employee.createEmployee(data)
    }
    updateEmployee(id:number,data: FormData){
        return this.employee.updateEmployee(id,data)
    }
    deleteEmployee(id:number){
        return this.employee.deleteEmployee(id)
    }

    filterList(filter: IEmployeeFilter) {
        return this._list.filter((employee) => {
            console.log(typeof employee.departmentId);
            const departmentId = Number(filter.departmentId)
            const filterDepartment = filter.departmentId ? departmentId === employee.departmentId : true;
            if (employee.fullName.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()) && filterDepartment) return true;
            return false;
        });   
    }

    sortBy(sortInfo: ISortInfo) {
        const {field, direction} = sortInfo
        const filter =field as keyof IEquipment;
        return [...this._list.sort((a: any, b: any) => {
            const negativeOrPositive = direction === "DESC" ? -1 : 1;
            return b[filter] > a[filter] ? -1 : 1 * negativeOrPositive;
        })];
    }

}
