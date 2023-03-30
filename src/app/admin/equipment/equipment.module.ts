import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEquipmentComponent } from './components/view-equipment/view-equipment.component';
import { EquipmentComponent } from './equipment.component';
// import { AddEquipmentComponent } from './components/add-equipment/add-equipment.component';
import { UpdateEquipmentComponent } from './components/update-equipment/update-equipment.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { EquipmentFilterService } from '../admin-shared/services/equipment-filter.service';
import { AddEquipmentComponent } from './components/add-equipment/add-equipment.component';
import { ConcreteModalComponent } from './components/concrete-modal/concrete-modal.component';
import { EquipmentFormComponent } from './components/equipment-form/equipment-form.component';


const routes: Routes = [
  {path:'', component: EquipmentComponent}
]

@NgModule({
  declarations: [
    EquipmentComponent,
    ViewEquipmentComponent,
    AddEquipmentComponent,
    UpdateEquipmentComponent,
    ConcreteModalComponent,
    EquipmentFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    AdminSharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[EquipmentFilterService]
})
export class EquipmentModule { }
