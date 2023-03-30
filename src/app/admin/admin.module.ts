import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path:'', pathMatch:'full', redirectTo:'/equipments'},
  {path:'equipments', loadChildren:()=>import('./equipment/equipment.module').then(m=>m.EquipmentModule)},
  {path:'employee', loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule)},
  {path:'equipment-asignment', loadChildren:()=>import('./equipment-asignment/equipment-asignment.module').then(m=>m.EquipmentAsignmentModule)},
  {path:'device-type', loadChildren:()=>import('./device-type/device-type.module').then(m=>m.DeviceTypeModule)},
]

@NgModule({
  declarations: [
  

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
