import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceBrandDTO } from './device-brand.dto';
import { DeviceTypeDTO } from './device-type.dto';
import { EquipmentDTO } from './equipment.dto';

@Injectable({
  providedIn: 'root',
})
export class EquipmentAPI {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  // mutipartHttpOptions = {
  //   headers: new HttpHeaders({ "Content-Type": "multipart/form-data"  }),
  // };

  constructor(private _http: HttpClient,@Inject('BASE_URL')private baseUrl: string) {}

  getEquipments(): Observable<EquipmentDTO[]> {
    return this._http.get<EquipmentDTO[]>(this.baseUrl +'/equipments');
  }
  

  getAllDeviceTypes(){
    return this._http.get<DeviceTypeDTO[]>(this.baseUrl+'/device-types');
  }
  getDeviceBrandsOfDeviceType(id:number){
    return this._http.get<DeviceBrandDTO[]>(this.baseUrl+'/equipment-brands/device-types/'+id);
  }

  createEquipment(equipment:any): Observable<any> {
    return this._http.post(this.baseUrl+'/equipments', equipment,);
  }
  
  updateEquipment(id:number,equipment:any){
    return this._http.put(this.baseUrl+'/equipments/'+id, equipment);
  }
  deleteEquipment(id:number){
    return this._http.delete(this.baseUrl+'/equipments/'+id);
  }

  //Comcrete equipment
  createConcrete(id:number, price:number): Observable<any> {
    return this._http.post(this.baseUrl+'/concrete-equipments', {equipmentId: id, price});
  }
  getConcreteEquipments(equipmentId:number): Observable<any> {
    return this._http.get<any>(this.baseUrl+'/concrete-equipments/equipments/'+equipmentId)
  }
  deleteConcrete(id:number){
    return this._http.delete(this.baseUrl+'/concrete-equipments/'+id);
  }

}
