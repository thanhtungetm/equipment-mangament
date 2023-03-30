import { Component,Input, Output } from '@angular/core';
import { IEquipment } from 'src/app/admin/equipment/model/equipment.model';

@Component({
  selector: 'app-asignment-info',
  templateUrl: './asignment-info.component.html',
  styleUrls: ['./asignment-info.component.scss']
})
export class AsignmentInfoComponent {
  @Input() user: any
}
