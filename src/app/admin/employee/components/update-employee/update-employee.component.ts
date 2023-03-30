import { Component,EventEmitter,Output,ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/admin/equipment-asignment/model/user.model';
import { EmployeeFormComponent } from 'src/app/shared/components/employee-form/employee-form.component';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {
  status: "close" | "open" = "open";

  @Input() employee: IUser | null = null
  @Output() success = new EventEmitter()
  
  showWarning: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  @ViewChild(EmployeeFormComponent) form! : EmployeeFormComponent


  constructor(private employeeService: EmployeeService) {}

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


      // console.log("Update Employee:", )

      for(let key in addFrom){

        if (!form.controls[key].pristine || form.controls[key].touched) {
          formData.append(key, addFrom[key]);
          console.log(key, addFrom[key]);
      }
      }
      this.employeeService.updateEmployee(this.employee!.id,formData).subscribe((data) => {
          console.log("Update successfully", data);
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
