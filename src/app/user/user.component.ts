import { Component } from "@angular/core";
import { IAssignEquipment } from "../admin/equipment-asignment/model/user.model copy";
import { AuthService } from "../shared/services/auth.service";
import { EmployeeService } from "../shared/services/employee.service";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})
export class UserComponent {
    list: IAssignEquipment[] = [];
    currentConcrete: IAssignEquipment | null = null;
    currentPage = 0;
    ITEM_PER_PAGE = 5;

    showDetail = false;

    constructor(private employeeService: EmployeeService, private authService: AuthService) {}

    ngOnInit() {
        const userId = this.authService.getId();
        this.getAssignedEquipments(userId);
    }

    getAssignedEquipments(id:number) {
      
            this.employeeService.getAssignedEquipments(id).subscribe((data) => {
                console.log("List:", data);
                this.list = data;
            });

    }

    openDetail(concrete: IAssignEquipment) {
        this.currentConcrete = concrete;
        this.showDetail = true;
    }
    closeDetail() {
        console.log("Close");

        this.showDetail = false;
    }
}
