import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { AsignmentInfoComponent } from './components/asignment-info/asignment-info.component';
import { AsignmentModalComponent } from './components/asignment-modal/asignment-modal.component';
import { ConcreteEquipmentInfoComponent } from './components/concrete-equipment-info/concrete-equipment-info.component';
import { ConcreteEquipmentTabComponent } from './components/concrete-equipment-tab/concrete-equipment-tab.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeFrameComponent } from './components/employee-frame/employee-frame.component';
import { EmployeeTabComponent } from './components/employee-tab/employee-tab.component';
import { EquipmentFrameComponent } from './components/equipment-frame/equipment-frame.component';
import { EquipmentAsignmentComponent } from './equipment-asignment.component';
import { ConcreteEquipmentService } from './services/concrete-equipment.service';
import { AsignmentViewComponent } from './components/asignment-view/asignment-view.component';

const routes: Routes = [
  {path:'', component: EquipmentAsignmentComponent}
]
@NgModule({
  declarations: [
    EquipmentAsignmentComponent,
    EquipmentFrameComponent,
    ConcreteEquipmentTabComponent,
    AsignmentModalComponent,
    AsignmentInfoComponent,
    EmployeeTabComponent,
    EmployeeFrameComponent,
    EmployeeDetailComponent,
    ConcreteEquipmentInfoComponent,
    AsignmentViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminSharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[ConcreteEquipmentService]
})
export class EquipmentAsignmentModule { }
