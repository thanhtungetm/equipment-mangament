import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDepartment } from 'src/app/admin/admin-shared/model/department.model';
import { IUser } from 'src/app/admin/equipment-asignment/model/user.model';
import { UtilHelper } from 'src/app/helper/utils.helper';
import { checkPassword } from 'src/app/helper/validator.helper';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  form!: FormGroup;

  showWarning: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  @Input() update : boolean = false
  @Input() employee : IUser | null = null
  @Output() onSubmit = new EventEmitter<FormGroup>()

  departmentList: IDepartment[] = [];

  imageFile : File | null = null

  constructor(private fb: FormBuilder,private employeeService: EmployeeService) {}

  ngOnInit(): void {
      this.initAddForm();
      this.employeeService.getAllDepartment().subscribe({
        next: (data) => {
            this.departmentList = data;
        }
    });
  }

  initAddForm() {
      this.form = this.fb.group({
        fullName: [this.employee?.fullName || "", [Validators.required]],
        roleId: 2 ,
        username: ["", [this.employee? Validators.nullValidator : Validators.required]],
        password: ["", [this.employee? Validators.nullValidator : Validators.required]],
        email: [this.employee?.email || "", [Validators.required, Validators.email]],
        image: [null,],
        phoneNumber: [this.employee?.phoneNumber || "",[Validators.required]],
        departmentId: ["", [this.employee? Validators.nullValidator : Validators.required]]
      });
  }

  submit() {

      this.onSubmit.emit(this.form)
  }

  

  onFileSelected(event: Event){
      console.log("File slected");
      this.form.controls['image'].markAsTouched()
      const file = (event.target as HTMLInputElement).files?.[0];
      if(!UtilHelper.isImageFile(file)){
          this.f['image'].setErrors({requiredFileType: true})
          console.log("False");
          
      }else{
          this.imageFile = file || null
          this.form.patchValue({
              image: this.imageFile
          })
      }
  }

  isPristine(){
    return this.form.pristine
  }

  get f(){
      return this.form.controls
  }
}
