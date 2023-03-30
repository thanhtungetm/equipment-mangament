import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEquipmentFilter } from '../model/equiment-filter.model';

@Injectable({
  providedIn:'any'
})
export class EquipmentFilterService {
  private _equipmentFilter = {search: '', deviceType:'', deviceBrand:''}
  equimentFilter$ = new BehaviorSubject(this._equipmentFilter)

  constructor() { }

  changeFilter(newFilter: IEquipmentFilter){
    this._equipmentFilter = newFilter
    this.equimentFilter$.next(newFilter)
  }

  getFilter(){
    return this._equipmentFilter
  }

}
