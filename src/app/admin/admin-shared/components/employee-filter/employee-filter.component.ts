import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, Subject } from 'rxjs';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { IDepartment } from '../../model/department.model';
import { EmployeeFilterService } from '../../services/employee-filter.service';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss']
})

export class EmployeeFilterComponent {
  faTimes= faTimes

  search! : string
  searchInput$ = new Subject()

  departmentList! : IDepartment[]

  constructor(private employeeService: EmployeeService,private employeeFilterService: EmployeeFilterService){
    this.searchInput$.pipe(debounceTime(400)).subscribe((input:any) => {
      employeeFilterService.changeFilter({...this.employeeFilterService.getFilter(), search: String(input.value)})
    });
  }

  ngOnInit() {
    this.employeeService.getAllDepartment().subscribe({
        next: (data) => {
            console.log("Department:", data);
            this.departmentList = data;
        }
    });
}


  handleChangeDepartment(event:Event){
      const departmentId = (event.target as HTMLSelectElement).value;
      this.employeeFilterService.changeFilter({ ...this.employeeFilterService.getFilter(), departmentId });
  }

  clear(searchInput: HTMLElement){
    console.log("search input el:", searchInput);
    (searchInput as HTMLInputElement).value = ''
    this.searchInput$.next(searchInput)
  }

}
