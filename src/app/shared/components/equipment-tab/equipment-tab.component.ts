import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEquipment } from 'src/app/admin/equipment/model/equipment.model';
import { EquipmentFrame } from 'src/app/helper/constant.helper';

@Component({
  selector: 'app-equipment-tab',
  templateUrl: './equipment-tab.component.html',
  styleUrls: ['./equipment-tab.component.scss']
})
export class EquipmentTabComponent {

  @Input() list!: IEquipment[]
  @Output() select = new EventEmitter<IEquipment>()

  currentPage = 0;
  ITEM_PER_PAGE = 5
  
  ngOnInit(){
    console.log("Fetch equipment tab")
  }


  handleOpenEquipment(equipment: IEquipment){
    this.select.emit(equipment)
  }
}
