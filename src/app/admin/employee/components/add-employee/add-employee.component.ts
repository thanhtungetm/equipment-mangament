import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeFormComponent } from 'src/app/shared/components/employee-form/employee-form.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
    status: "close" | "open" = "open";

    @Output() success = new EventEmitter()
    
    showWarning: boolean = false;
    showSuccess: boolean = false;
    showError: boolean = false;

    @ViewChild(EmployeeFormComponent) form! : EmployeeFormComponent


    constructor(private fb: FormBuilder,private employeeService: EmployeeService) {}

    toggle() {
        if (!this.form.isPristine) {
            this.showWarning = true;
            return;
        }
        this.status = this.status === "close" ? "open" : "close";
    }

    submit(form: FormGroup) {
        const addFrom = form.value
        const formData = new FormData()
        for(let key in addFrom){
            formData.append(key,addFrom[key])
            console.log(key, addFrom[key])
        }
        this.employeeService.createEmployee(formData).subscribe((data) => {
            console.log("Create successfully", data);
            this.showSuccess = true
        },
        (err) => {
            console.error(err)
            this.showError = true
        })
    }


    handleAnwserFromWarning(choose: boolean) {
        console.log("Choose:", choose);
        this.showWarning = false;
        if (choose) {
            this.status = "close";
            return;
        }
    }
    handleCloseSuccess(){
        this.status = 'close'
        this.success.emit()
    }
}
