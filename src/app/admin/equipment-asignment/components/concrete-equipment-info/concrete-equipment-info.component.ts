import { Component, Input } from '@angular/core';
import { IEquipment } from 'src/app/admin/equipment/model/equipment.model';
import { IConcreteEquipment } from '../../model/concrete-equipment.model';

@Component({
  selector: 'app-concrete-equipment-info',
  templateUrl: './concrete-equipment-info.component.html',
  styleUrls: ['./concrete-equipment-info.component.scss']
})
export class ConcreteEquipmentInfoComponent {
  @Input() equipment : IEquipment | null = null
  @Input() concrete : IConcreteEquipment | null = null
}
