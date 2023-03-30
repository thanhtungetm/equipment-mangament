import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { IUser } from "../admin/equipment-asignment/model/user.model";
import { AuthService } from "../shared/services/auth.service";
import { EmployeeService } from "../shared/services/employee.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent {
    faPlus = faPlus;

    user: IUser | null = null;

    showSuccess = false
    showError = false

    constructor(private employeeService: EmployeeService, private authService: AuthService) {}

    ngOnInit() {
        const userId = this.authService.getId();
        this.employeeService.getEmployeeById(userId).subscribe((data) => {
            console.log(data);
            this.user = data;
        });
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
      this.employeeService.updateEmployee(this.user!.id,formData).subscribe((data) => {
          console.log("Update successfully", data);
          this.showSuccess = true
      },
      (err) => {
          console.error(err)
          this.showError = true
      })
  }
}
