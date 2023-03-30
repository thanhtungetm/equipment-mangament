import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { EmployeeService } from "src/app/shared/services/employee.service";
import { ISortInfo } from "../admin-shared/model/sort-info.model";
import { EmployeeFilterService } from "../admin-shared/services/employee-filter.service";
import { IUser } from "../equipment-asignment/model/user.model";
import { IEquipment } from "../equipment/model/equipment.model";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { UpdateEmployeeComponent } from "./components/update-employee/update-employee.component";

@Component({
    selector: "app-employee",
    templateUrl: "./employee.component.html",
    styleUrls: ["./employee.component.scss"],
    providers:[EmployeeFilterService]
})
export class EmployeeComponent {
    faPlus = faPlus;
    @ViewChild('modalContainer', {read:ViewContainerRef}) modalContainer!: ViewContainerRef

    showWarning = false

    currentPage = 0;
    ITEM_PER_PAGE = 5
    
    list: IUser[] = [];
    currentEmployee : IUser | null = null

    

    columnList: { title: string; fieldName?: string }[] = [
        {
            title: "Id",
            fieldName: "id"
        },
        {
            title: "Avatar"
        },
        {
            title: "Full Name",
            fieldName: "fullName"
        },
        {
            title: "Email",
        },
        {
            title: "Department",
            fieldName: "departmentName"
        },
        {
            title: "Action"
        }
    ];
    currentSortField!: string;
    directionSort: "ASC" | "DESC" = "ASC";

    constructor(private employeeService: EmployeeService,private employeeFilterService: EmployeeFilterService){

    }

    ngOnInit(){ 

        this.getEmployee()

        this.employeeFilterService.employeetFilter$.subscribe((filter) => {
            this.currentPage = 0
            this.list = this.employeeService.filterList(filter)
            console.log(this.list);
            // this.router.navigate([], {
            //     relativeTo: this.activatedRoute,
            //     queryParams: filter,
            //     queryParamsHandling: "merge"
            // });
        });
    }

    getEmployee(){
        this.employeeService
        .getEmployee().subscribe({
            next: (data) => {
                console.log("End component:", data);
                this.list = data;
            }
        });
    }

    sortBy(sortInfo: ISortInfo){
        this.list = this.employeeService.sortBy(sortInfo)
    }

    openAddEquipment(){
        this.modalContainer.clear()
        const addModal = this.modalContainer.createComponent(AddEmployeeComponent)
        addModal.instance.success.subscribe(()=>this.getEmployee())
    }
    openUpdateEquipment(employee: IUser){
        this.modalContainer.clear()
        const updateModal = this.modalContainer.createComponent(UpdateEmployeeComponent)
        updateModal.instance.employee = employee
        updateModal.instance.success.subscribe(()=>this.getEmployee())
    }
    openViewEquipment(){
        
    }

    openDeleteWarning(employee: IUser){
        this.currentEmployee = employee
        this.showWarning = true
    }
    deleteEmployee(choose:boolean){
        this.showWarning = false
        if(!choose) return
        console.log("Current:", this.currentEmployee)
        this.employeeService.deleteEmployee(this.currentEmployee!.id).subscribe((data)=>{
            console.log("Delete successfully:",data)
            this.getEmployee()
        })
    }
}
