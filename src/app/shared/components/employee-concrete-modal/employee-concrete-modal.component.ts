import { Component,EventEmitter,Input, Output } from '@angular/core';
import { IEquipment } from 'src/app/admin/equipment/model/equipment.model';
import { IConcreteEquipment } from '../../../admin/equipment-asignment/model/concrete-equipment.model';
import { IAssignEquipment } from '../../../admin/equipment-asignment/model/user.model copy';

@Component({
  selector: 'app-employee-concrete-modal',
  templateUrl: './employee-concrete-modal.component.html',
  styleUrls: ['./employee-concrete-modal.component.scss']
})
export class EmployeeConcreteModalComponent {
  @Input() assignEquipment: IAssignEquipment | null = null

  @Output() close = new EventEmitter()
}
