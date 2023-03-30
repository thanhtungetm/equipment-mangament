import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEmployeeFilter } from '../model/employee-filter.model';

@Injectable({
  providedIn:'any'
})
export class EmployeeFilterService {
  private _employeeFilter = {search: '', departmentId:''}
  employeetFilter$ = new BehaviorSubject(this._employeeFilter)

  constructor() { }

  changeFilter(newFilter: IEmployeeFilter){
    this._employeeFilter = newFilter
    this.employeetFilter$.next(newFilter)
  }

  getFilter(){
    return this._employeeFilter
  }

}
